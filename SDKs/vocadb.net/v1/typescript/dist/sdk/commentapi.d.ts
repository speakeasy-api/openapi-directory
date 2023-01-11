import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CommentApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * commentApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    commentApiDeleteComment(req: operations.CommentApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.CommentApiDeleteCommentResponse>;
    /**
     * commentApiGetComments - Gets a list of comments for an entry.
    **/
    commentApiGetComments(req: operations.CommentApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.CommentApiGetCommentsResponse>;
}

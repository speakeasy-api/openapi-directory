import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosComments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a comment to a video
     */
    createComment(req: operations.CreateCommentRequest, security: operations.CreateCommentSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCommentResponse>;
    /**
     * Add a comment to a video
     */
    createCommentAlt1(req: operations.CreateCommentAlt1Request, security: operations.CreateCommentAlt1Security, config?: AxiosRequestConfig): Promise<operations.CreateCommentAlt1Response>;
    /**
     * Add a reply to a video comment
     */
    createCommentReply(req: operations.CreateCommentReplyRequest, security: operations.CreateCommentReplySecurity, config?: AxiosRequestConfig): Promise<operations.CreateCommentReplyResponse>;
    /**
     * Delete a video comment
     */
    deleteComment(req: operations.DeleteCommentRequest, security: operations.DeleteCommentSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCommentResponse>;
    /**
     * Edit a video comment
     */
    editComment(req: operations.EditCommentRequest, security: operations.EditCommentSecurity, config?: AxiosRequestConfig): Promise<operations.EditCommentResponse>;
    /**
     * Get a specific video comment
     */
    getComment(req: operations.GetCommentRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentResponse>;
    /**
     * Get all the replies to a video comment
     */
    getCommentReplies(req: operations.GetCommentRepliesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentRepliesResponse>;
    /**
     * Get all the comments on a video
     */
    getComments(req: operations.GetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsResponse>;
    /**
     * Get all the comments on a video
     */
    getCommentsAlt1(req: operations.GetCommentsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetCommentsAlt1Response>;
}

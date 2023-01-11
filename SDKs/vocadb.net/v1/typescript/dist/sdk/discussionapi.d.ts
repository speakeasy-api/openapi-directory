import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DiscussionApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    discussionApiDeleteComment(req: operations.DiscussionApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiDeleteCommentResponse>;
    discussionApiDeleteTopic(req: operations.DiscussionApiDeleteTopicRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiDeleteTopicResponse>;
    discussionApiGetFolders(req: operations.DiscussionApiGetFoldersRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetFoldersResponse>;
    discussionApiGetTopic(req: operations.DiscussionApiGetTopicRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetTopicResponse>;
    discussionApiGetTopics(req: operations.DiscussionApiGetTopicsRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetTopicsResponse>;
    discussionApiGetTopicsForFolder(req: operations.DiscussionApiGetTopicsForFolderRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetTopicsForFolderResponse>;
}

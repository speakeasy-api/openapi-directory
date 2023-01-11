import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TagApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tagApiDelete - Deletes a tag.
    **/
    tagApiDelete(req: operations.TagApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagApiDeleteResponse>;
    /**
     * tagApiDeleteComment - Deletes a comment.
     *             Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    tagApiDeleteComment(req: operations.TagApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.TagApiDeleteCommentResponse>;
    /**
     * tagApiGetById - Gets a tag by ID.
    **/
    tagApiGetById(req: operations.TagApiGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetByIdResponse>;
    /**
     * tagApiGetByName - DEPRECATED. Gets a tag by name.
    **/
    tagApiGetByName(req: operations.TagApiGetByNameRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetByNameResponse>;
    /**
     * tagApiGetCategoryNamesList - Gets a list of tag category names.
    **/
    tagApiGetCategoryNamesList(req: operations.TagApiGetCategoryNamesListRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetCategoryNamesListResponse>;
    /**
     * tagApiGetChildTags - Gets a list of child tags for a tag.
     *             Only direct children will be included.
    **/
    tagApiGetChildTags(req: operations.TagApiGetChildTagsRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetChildTagsResponse>;
    /**
     * tagApiGetComments - Gets a list of comments for a tag.
     *             Note: pagination and sorting might be added later.
    **/
    tagApiGetComments(req: operations.TagApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetCommentsResponse>;
    /**
     * tagApiGetList - Find tags.
    **/
    tagApiGetList(req: operations.TagApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetListResponse>;
    /**
     * tagApiGetNames - Find tag names by a part of name.
     *
     *             Matching is done anywhere from the name.
    **/
    tagApiGetNames(req: operations.TagApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetNamesResponse>;
    /**
     * tagApiGetTopTags - Gets the most common tags in a category.
    **/
    tagApiGetTopTags(req: operations.TagApiGetTopTagsRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetTopTagsResponse>;
    /**
     * tagApiPostNewTag - Creates a new tag.
    **/
    tagApiPostNewTag(req: operations.TagApiPostNewTagRequest, config?: AxiosRequestConfig): Promise<operations.TagApiPostNewTagResponse>;
    /**
     * tagApiPostReport - Creates a new report.
    **/
    tagApiPostReport(req: operations.TagApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.TagApiPostReportResponse>;
}

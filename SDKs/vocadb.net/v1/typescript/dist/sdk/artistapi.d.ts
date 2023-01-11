import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ArtistApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * artistApiDelete - Deletes an artist.
    **/
    artistApiDelete(req: operations.ArtistApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiDeleteResponse>;
    /**
     * artistApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    artistApiDeleteComment(req: operations.ArtistApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiDeleteCommentResponse>;
    /**
     * artistApiGetComments - Gets a list of comments for an artist.
     *
     * Pagination and sorting might be added later.
    **/
    artistApiGetComments(req: operations.ArtistApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetCommentsResponse>;
    /**
     * artistApiGetList - Find artists.
    **/
    artistApiGetList(req: operations.ArtistApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetListResponse>;
    /**
     * artistApiGetNames - Gets a list of artist names. Ideal for autocomplete boxes.
    **/
    artistApiGetNames(req: operations.ArtistApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetNamesResponse>;
    /**
     * artistApiGetOne - Gets an artist by Id.
    **/
    artistApiGetOne(req: operations.ArtistApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetOneResponse>;
}

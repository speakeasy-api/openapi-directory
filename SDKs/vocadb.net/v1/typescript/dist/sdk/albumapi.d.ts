import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AlbumApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * albumApiDelete - Deletes an album.
    **/
    albumApiDelete(req: operations.AlbumApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiDeleteResponse>;
    /**
     * albumApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    albumApiDeleteComment(req: operations.AlbumApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiDeleteCommentResponse>;
    albumApiDeleteReview(req: operations.AlbumApiDeleteReviewRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiDeleteReviewResponse>;
    /**
     * albumApiGetComments - Gets a list of comments for an album.
     *
     * Pagination and sorting might be added later.
    **/
    albumApiGetComments(req: operations.AlbumApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetCommentsResponse>;
    /**
     * albumApiGetList - Gets a page of albums.
    **/
    albumApiGetList(req: operations.AlbumApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetListResponse>;
    /**
     * albumApiGetNames - Gets a list of album names. Ideal for autocomplete boxes.
    **/
    albumApiGetNames(req: operations.AlbumApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetNamesResponse>;
    /**
     * albumApiGetNewAlbums - Gets list of upcoming or recent albums, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    albumApiGetNewAlbums(req: operations.AlbumApiGetNewAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetNewAlbumsResponse>;
    /**
     * albumApiGetOne - Gets an album by Id.
    **/
    albumApiGetOne(req: operations.AlbumApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetOneResponse>;
    albumApiGetReviews(req: operations.AlbumApiGetReviewsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetReviewsResponse>;
    /**
     * albumApiGetTopAlbums - Gets list of top rated albums, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    albumApiGetTopAlbums(req: operations.AlbumApiGetTopAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetTopAlbumsResponse>;
    /**
     * albumApiGetTracks - Gets tracks for an album.
    **/
    albumApiGetTracks(req: operations.AlbumApiGetTracksRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetTracksResponse>;
    albumApiGetTracksFields(req: operations.AlbumApiGetTracksFieldsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetTracksFieldsResponse>;
    albumApiGetUserCollections(req: operations.AlbumApiGetUserCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetUserCollectionsResponse>;
}

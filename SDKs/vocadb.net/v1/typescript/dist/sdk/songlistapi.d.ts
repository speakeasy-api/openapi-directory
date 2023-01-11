import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SongListApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * songListApiDelete - Deletes a song list.
    **/
    songListApiDelete(req: operations.SongListApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiDeleteResponse>;
    /**
     * songListApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    songListApiDeleteComment(req: operations.SongListApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiDeleteCommentResponse>;
    /**
     * songListApiGetComments - Gets a list of comments for a song list.
    **/
    songListApiGetComments(req: operations.SongListApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetCommentsResponse>;
    /**
     * songListApiGetFeaturedListNames - Gets a list of featuedd list names. Ideal for autocomplete boxes.
    **/
    songListApiGetFeaturedListNames(req: operations.SongListApiGetFeaturedListNamesRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetFeaturedListNamesResponse>;
    /**
     * songListApiGetFeaturedLists - Gets a list of featured song lists.
    **/
    songListApiGetFeaturedLists(req: operations.SongListApiGetFeaturedListsRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetFeaturedListsResponse>;
    /**
     * songListApiGetSongs - Gets a list of songs in a song list.
    **/
    songListApiGetSongs(req: operations.SongListApiGetSongsRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetSongsResponse>;
}

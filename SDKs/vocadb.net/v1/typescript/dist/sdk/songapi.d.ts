import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SongApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * songApiDelete - Deletes a song.
    **/
    songApiDelete(req: operations.SongApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SongApiDeleteResponse>;
    /**
     * songApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    songApiDeleteComment(req: operations.SongApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.SongApiDeleteCommentResponse>;
    /**
     * songApiGetById - Gets a song by Id.
    **/
    songApiGetById(req: operations.SongApiGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetByIdResponse>;
    /**
     * songApiGetByPv - Gets a song by PV.
    **/
    songApiGetByPv(req: operations.SongApiGetByPvRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetByPvResponse>;
    /**
     * songApiGetComments - Gets a list of comments for a song.
     *
     * Pagination and sorting might be added later.
    **/
    songApiGetComments(req: operations.SongApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetCommentsResponse>;
    /**
     * songApiGetDerived - Gets derived (alternate versions) of a song.
     *
     * Pagination and sorting might be added later.
    **/
    songApiGetDerived(req: operations.SongApiGetDerivedRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetDerivedResponse>;
    /**
     * songApiGetHighlightedSongs - Gets list of highlighted songs, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    songApiGetHighlightedSongs(req: operations.SongApiGetHighlightedSongsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetHighlightedSongsResponse>;
    /**
     * songApiGetList - Find songs.
    **/
    songApiGetList(req: operations.SongApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetListResponse>;
    /**
     * songApiGetLyrics - Gets lyrics by ID.
     *
     * Output is cached. Specify song version as parameter to refresh.
    **/
    songApiGetLyrics(req: operations.SongApiGetLyricsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetLyricsResponse>;
    /**
     * songApiGetNames - Gets a list of song names. Ideal for autocomplete boxes.
    **/
    songApiGetNames(req: operations.SongApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetNamesResponse>;
    /**
     * songApiGetRatings - Get ratings for a song.
     *
     * The result includes ratings and user information.
     *             For users who have requested not to make their ratings public, the user will be empty.
    **/
    songApiGetRatings(req: operations.SongApiGetRatingsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetRatingsResponse>;
    /**
     * songApiGetRelated - Gets related songs.
    **/
    songApiGetRelated(req: operations.SongApiGetRelatedRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetRelatedResponse>;
    /**
     * songApiGetTopSongs - Gets top rated songs.
    **/
    songApiGetTopSongs(req: operations.SongApiGetTopSongsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetTopSongsResponse>;
    /**
     * songApiPostRating - Add or update rating for a specific song, for the currently logged in user.
     *
     * If the user has already rated the song, any previous rating is replaced.
     *             Authorization cookie must be included.
     *             This API supports CORS.
    **/
    songApiPostRating(req: operations.SongApiPostRatingRequest, config?: AxiosRequestConfig): Promise<operations.SongApiPostRatingResponse>;
}

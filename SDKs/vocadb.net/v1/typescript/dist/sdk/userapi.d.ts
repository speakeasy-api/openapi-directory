import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    userApiDeleteFollowedTag(req: operations.UserApiDeleteFollowedTagRequest, config?: AxiosRequestConfig): Promise<operations.UserApiDeleteFollowedTagResponse>;
    /**
     * userApiDeleteMessages - Deletes a list of user messages.
    **/
    userApiDeleteMessages(req: operations.UserApiDeleteMessagesRequest, config?: AxiosRequestConfig): Promise<operations.UserApiDeleteMessagesResponse>;
    /**
     * userApiDeleteProfileComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    userApiDeleteProfileComment(req: operations.UserApiDeleteProfileCommentRequest, config?: AxiosRequestConfig): Promise<operations.UserApiDeleteProfileCommentResponse>;
    /**
     * userApiGetAlbumCollection - Gets a list of albums in a user's collection.
     *
     * This includes albums that have been rated by the user as well as albums that the user has bought or wishlisted.
     *             Note that the user might have set his album ownership status and media type as private, in which case those properties are not included.
    **/
    userApiGetAlbumCollection(req: operations.UserApiGetAlbumCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetAlbumCollectionResponse>;
    userApiGetAlbumForUser(req: operations.UserApiGetAlbumForUserRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetAlbumForUserResponse>;
    userApiGetArtistForUser(req: operations.UserApiGetArtistForUserRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetArtistForUserResponse>;
    /**
     * userApiGetCurrent - Gets information about the currently logged in user.
     *
     * Requires login information.
     *             This API supports CORS, and is restricted to specific origins.
    **/
    userApiGetCurrent(req: operations.UserApiGetCurrentRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetCurrentResponse>;
    /**
     * userApiGetEvents - Gets a list of events a user has subscribed to.
    **/
    userApiGetEvents(req: operations.UserApiGetEventsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetEventsResponse>;
    /**
     * userApiGetFollowedArtists - Gets a list of artists followed by a user.
    **/
    userApiGetFollowedArtists(req: operations.UserApiGetFollowedArtistsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetFollowedArtistsResponse>;
    /**
     * userApiGetList - Gets a list of users.
    **/
    userApiGetList(req: operations.UserApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetListResponse>;
    /**
     * userApiGetMessage - Gets a user message.
     *
     * The message will be marked as read.
     *             User can only load messages from their own inbox.
    **/
    userApiGetMessage(req: operations.UserApiGetMessageRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetMessageResponse>;
    /**
     * userApiGetMessages - Gets a list of messages.
    **/
    userApiGetMessages(req: operations.UserApiGetMessagesRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetMessagesResponse>;
    /**
     * userApiGetNames - Gets a list of user names. Ideal for autocomplete boxes.
    **/
    userApiGetNames(req: operations.UserApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetNamesResponse>;
    /**
     * userApiGetOne - Gets user by ID.
    **/
    userApiGetOne(req: operations.UserApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetOneResponse>;
    /**
     * userApiGetProfileComments - Gets a list of comments posted on user's profile.
    **/
    userApiGetProfileComments(req: operations.UserApiGetProfileCommentsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetProfileCommentsResponse>;
    /**
     * userApiGetRatedSongs - Gets a list of songs rated by a user.
    **/
    userApiGetRatedSongs(req: operations.UserApiGetRatedSongsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetRatedSongsResponse>;
    userApiGetSongLists(req: operations.UserApiGetSongListsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetSongListsResponse>;
    /**
     * userApiGetSongRating - Gets a specific user's rating for a song.
    **/
    userApiGetSongRating(req: operations.UserApiGetSongRatingRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetSongRatingResponse>;
    /**
     * userApiGetSongRatingForCurrent - Gets currently logged in user's rating for a song.
     *
     * Requires authentication.
    **/
    userApiGetSongRatingForCurrent(req: operations.UserApiGetSongRatingForCurrentRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetSongRatingForCurrentResponse>;
    /**
     * userApiPostAlbumStatus - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
     *
     * If the user has already rated the album, any previous rating is replaced.
     *             Authorization cookie must be included.
    **/
    userApiPostAlbumStatus(req: operations.UserApiPostAlbumStatusRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostAlbumStatusResponse>;
    userApiPostFollowedTag(req: operations.UserApiPostFollowedTagRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostFollowedTagResponse>;
    /**
     * userApiPostRefreshEntryEdit - Refresh entry edit status, indicating that the current user is still editing that entry.
    **/
    userApiPostRefreshEntryEdit(req: operations.UserApiPostRefreshEntryEditRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostRefreshEntryEditResponse>;
    userApiPostReport(req: operations.UserApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostReportResponse>;
    /**
     * userApiPostSetting - Updates user setting.
    **/
    userApiPostSetting(req: operations.UserApiPostSettingRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostSettingResponse>;
    getApiUsersCurrentAlbumCollectionStatusesAlbumId(req: operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse>;
    getApiUsersCurrentFollowedArtistsArtistId(req: operations.GetApiUsersCurrentFollowedArtistsArtistIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiUsersCurrentFollowedArtistsArtistIdResponse>;
}

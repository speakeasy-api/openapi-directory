import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditAlbumSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The type of layout for presenting the album.
 */
export declare enum EditAlbumRequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}
/**
 * The privacy level of the album.
 */
export declare enum EditAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
/**
 * The default sort order of the album's videos.
 */
export declare enum EditAlbumRequestBodySortEnum {
    AddedFirst = "added_first",
    AddedLast = "added_last",
    Alphabetical = "alphabetical",
    Arranged = "arranged",
    Comments = "comments",
    Likes = "likes",
    Newest = "newest",
    Oldest = "oldest",
    Plays = "plays"
}
/**
 * The color theme of the album.
 */
export declare enum EditAlbumRequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class EditAlbumRequestBody extends SpeakeasyBase {
    /**
     * The hexadecimal code for the color of the player buttons.
     */
    brandColor?: string;
    /**
     * The description of the album.
     */
    description?: string;
    /**
     * The custom domain a user has selected for their album.
     */
    domain?: string;
    /**
     * Whether to hide Vimeo navigation when displaying the album.
     */
    hideNav?: boolean;
    /**
     * The type of layout for presenting the album.
     */
    layout?: EditAlbumRequestBodyLayoutEnum;
    /**
     * The name of the album.
     */
    name?: string;
    /**
     * The album's password. Required only if **privacy** is `password`.
     */
    password?: string;
    /**
     * The privacy level of the album.
     */
    privacy?: EditAlbumRequestBodyPrivacyEnum;
    /**
     * Whether album videos should use the review mode URL.
     */
    reviewMode?: boolean;
    /**
     * The default sort order of the album's videos.
     */
    sort?: EditAlbumRequestBodySortEnum;
    /**
     * The color theme of the album.
     */
    theme?: EditAlbumRequestBodyThemeEnum;
    /**
     * The custom Vimeo URL a user has selected for their album.
     */
    url?: string;
    /**
     * Whether the user has opted in to use a custom domain for their album.
     */
    useCustomDomain?: boolean;
}
export declare class EditAlbumRequest extends SpeakeasyBase {
    requestBody?: EditAlbumRequestBody;
    /**
     * The ID of the album.
     */
    albumId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class EditAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The album was edited.
     */
    album?: shared.Album;
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
}

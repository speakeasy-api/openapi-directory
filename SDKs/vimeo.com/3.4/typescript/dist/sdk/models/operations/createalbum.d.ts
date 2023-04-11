import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAlbumSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The type of layout for presenting the album.
 */
export declare enum CreateAlbumRequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}
/**
 * The privacy level of the album.
 */
export declare enum CreateAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
/**
 * The default sort order of the album's videos.
 */
export declare enum CreateAlbumRequestBodySortEnum {
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
export declare enum CreateAlbumRequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class CreateAlbumRequestBody extends SpeakeasyBase {
    /**
     * The hexadecimal code for the color of the player buttons.
     */
    brandColor?: string;
    /**
     * The description of the album.
     */
    description?: string;
    /**
     * Whether to hide Vimeo navigation when displaying the album.
     */
    hideNav?: boolean;
    /**
     * The type of layout for presenting the album.
     */
    layout?: CreateAlbumRequestBodyLayoutEnum;
    /**
     * The name of the album.
     */
    name: string;
    /**
     * The album's password. Required only if **privacy** is `password`.
     */
    password?: string;
    /**
     * The privacy level of the album.
     */
    privacy?: CreateAlbumRequestBodyPrivacyEnum;
    /**
     * Whether album videos should use the review mode URL.
     */
    reviewMode?: boolean;
    /**
     * The default sort order of the album's videos.
     */
    sort?: CreateAlbumRequestBodySortEnum;
    /**
     * The color theme of the album.
     */
    theme?: CreateAlbumRequestBodyThemeEnum;
}
export declare class CreateAlbumRequest extends SpeakeasyBase {
    requestBody: CreateAlbumRequestBody;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CreateAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The album was created.
     */
    album?: shared.Album;
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditAlbumAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The type of layout for presenting the album.
 */
export declare enum EditAlbumAlt1RequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}
/**
 * The privacy level of the album.
 */
export declare enum EditAlbumAlt1RequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
/**
 * The default sort order of the album's videos.
 */
export declare enum EditAlbumAlt1RequestBodySortEnum {
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
export declare enum EditAlbumAlt1RequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class EditAlbumAlt1RequestBody extends SpeakeasyBase {
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
    layout?: EditAlbumAlt1RequestBodyLayoutEnum;
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
    privacy?: EditAlbumAlt1RequestBodyPrivacyEnum;
    /**
     * Whether album videos should use the review mode URL.
     */
    reviewMode?: boolean;
    /**
     * The default sort order of the album's videos.
     */
    sort?: EditAlbumAlt1RequestBodySortEnum;
    /**
     * The color theme of the album.
     */
    theme?: EditAlbumAlt1RequestBodyThemeEnum;
    /**
     * The custom Vimeo URL a user has selected for their album.
     */
    url?: string;
    /**
     * Whether the user has opted in to use a custom domain for their album.
     */
    useCustomDomain?: boolean;
}
export declare class EditAlbumAlt1Request extends SpeakeasyBase {
    requestBody?: EditAlbumAlt1RequestBody;
    /**
     * The ID of the album.
     */
    albumId: number;
}
export declare class EditAlbumAlt1Response extends SpeakeasyBase {
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

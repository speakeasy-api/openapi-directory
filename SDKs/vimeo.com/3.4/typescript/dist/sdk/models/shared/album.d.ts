import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
import { User } from "./user";
export declare class AlbumPictureSizes extends SpeakeasyBase {
    /**
     * The height of the image.
     */
    height: number;
    /**
     * The direct link to the image.
     */
    link: string;
    /**
     * The direct link to the image with a play button overlay.
     */
    linkWithPlayButton?: string;
    /**
     * The width of the image.
     */
    width: number;
}
/**
 * The type of the picture:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `caution` - An image that is appropriate for all ages.
 *  * `custom` - A custom image for the video.
 *  * `default` - The default image for the video.
 *
 */
export declare enum AlbumPictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}
/**
 * The custom logo for this album.
 */
export declare class AlbumPicture extends SpeakeasyBase {
    /**
     * Whether this picture is the active picture for its parent resource.
     */
    active: boolean;
    /**
     * The upload URL for the picture. This field appears when you create the picture resource for the first time.
     */
    link?: string;
    /**
     * The picture's resource key string.
     */
    resourceKey: string;
    /**
     * An array containing reference information about all available image files.
     */
    sizes: AlbumPictureSizes[];
    /**
     * The type of the picture:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `caution` - An image that is appropriate for all ages.
     *  * `custom` - A custom image for the video.
     *  * `default` - The default image for the video.
     *
     */
    type: AlbumPictureTypeEnum;
    /**
     * The picture's URI.
     */
    uri: string;
}
/**
 * Embed data for the album.
 */
export declare class AlbumEmbed extends SpeakeasyBase {
    /**
     * The responsive HTML code to embed the playlist on a website. This is present only when `privacy.view` isn't password and when the album has embeddable videos.
     */
    html: string;
}
/**
 * The album's layout preference
 */
export declare enum AlbumLayoutEnum {
    Grid = "grid",
    Player = "player"
}
/**
 * Information about the videos that belong to this album.
 */
export declare class AlbumMetadataConnectionsVideos extends SpeakeasyBase {
    /**
     * An array of the HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of videos on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * A collection of information that is connected to this resource.
 */
export declare class AlbumMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the videos that belong to this album.
     */
    videos: AlbumMetadataConnectionsVideos;
}
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
 */
export declare class AlbumMetadataInteractionsAddCustomThumbnails extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
 */
export declare class AlbumMetadataInteractionsAddLogos extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
 */
export declare class AlbumMetadataInteractionsAddVideos extends SpeakeasyBase {
    /**
     * An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * A list of resource URIs related to the album.
 */
export declare class AlbumMetadataInteractions extends SpeakeasyBase {
    /**
     * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
     */
    addCustomThumbnails: AlbumMetadataInteractionsAddCustomThumbnails;
    /**
     * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
     */
    addLogos: AlbumMetadataInteractionsAddLogos;
    /**
     * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
     */
    addVideos: AlbumMetadataInteractionsAddVideos;
}
/**
 * Metadata about the album.
 */
export declare class AlbumMetadata extends SpeakeasyBase {
    /**
     * A collection of information that is connected to this resource.
     */
    connections: AlbumMetadataConnections;
    /**
     * A list of resource URIs related to the album.
     */
    interactions: AlbumMetadataInteractions;
}
/**
 * Who can view the album:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can view the album.
 *  * `embed_only` - Only owner can see album, can be embedded off-site
 *  * `password` - Only those with the password can view the album.
 *
 */
export declare enum AlbumPrivacyViewEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
/**
 * The privacy settings of the album.
 */
export declare class AlbumPrivacy extends SpeakeasyBase {
    /**
     * The privacy-enabled password to see this album. Present only when `privacy.view` is `password`.
     */
    password?: string;
    /**
     * Who can view the album:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can view the album.
     *  * `embed_only` - Only owner can see album, can be embedded off-site
     *  * `password` - Only those with the password can view the album.
     *
     */
    view: AlbumPrivacyViewEnum;
}
/**
 * Sort type of the album.
 */
export declare enum AlbumSortEnum {
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
 * The album's color theme preference
 */
export declare enum AlbumThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
/**
 * The album was created.
 */
export declare class Album extends SpeakeasyBase {
    /**
     * Whether an album should allow continuous play.
     */
    allowContinuousPlay: boolean;
    /**
     * Whether an album should allow downloads.
     */
    allowDownloads: boolean;
    /**
     * Whether an album should allow sharing.
     */
    allowShare: boolean;
    /**
     * Hexadecimal color code for the decorative color. For example, album videos use this color for player buttons.
     */
    brandColor: string;
    /**
     * The time in ISO 8601 format that the album was created.
     */
    createdTime: string;
    /**
     * The custom logo for this album.
     */
    customLogo: AlbumPicture;
    /**
     * A brief description of the album's content.
     */
    description: string;
    /**
     * The custom domain a user has selected for their album.
     */
    domain: string;
    /**
     * The total duration in seconds of all the videos in the album.
     */
    duration: number;
    /**
     * Embed data for the album.
     */
    embed: AlbumEmbed;
    /**
     * Whether to show the album's custom brand color in the player of the album's embedded playlist.
     */
    embedBrandColor: boolean;
    /**
     * Whether to show the album's custom logo in the player of the album's embedded playlist.
     */
    embedCustomLogo: boolean;
    /**
     * Whether to hide the Vimeo navigation when viewing the album.
     */
    hideNav: boolean;
    /**
     * Whether to hide the Vimeo logo in the player of the album's embedded playlist.
     */
    hideVimeoLogo: boolean;
    /**
     * The album's layout preference
     */
    layout: AlbumLayoutEnum;
    /**
     * The URL to access the album.
     */
    link: string;
    /**
     * Metadata about the album.
     */
    metadata: AlbumMetadata;
    /**
     * The time in ISO 8601 format when the album was last modified.
     */
    modifiedTime: string;
    /**
     * The album's display name.
     */
    name: string;
    /**
     * The active image for the album; defaults to the thumbnail of the last video added to the album.
     */
    pictures: Picture;
    /**
     * The privacy settings of the album.
     */
    privacy: AlbumPrivacy;
    /**
     * The album resource key.
     */
    resourceKey: string;
    /**
     * Whether album videos should use the review mode URL.
     */
    reviewMode: boolean;
    /**
     * Sort type of the album.
     */
    sort: AlbumSortEnum;
    /**
     * The album's color theme preference
     */
    theme: AlbumThemeEnum;
    /**
     * The album's URI.
     */
    uri: string;
    /**
     * The custom Vimeo URL a user has selected for their album.
     */
    url: string;
    /**
     * Whether the user has opted in to use a custom domain for their album.
     */
    useCustomDomain: boolean;
    /**
     * The owner of the album.
     */
    user: User;
    /**
     * Whether an album should show the brand color in the web layout.
     */
    webBrandColor: boolean;
    /**
     * Whether an album's custom logo should be shown in the web layout.
     */
    webCustomLogo: boolean;
}

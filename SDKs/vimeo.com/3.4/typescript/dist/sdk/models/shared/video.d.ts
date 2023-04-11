import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { Picture } from "./picture";
import { Tag } from "./tag";
import { User } from "./user";
/**
 * The contextual action:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `Added to` - An Added To action.
 *  * `Appearance by` - An Appearance By action.
 *  * `Liked by` - A Liked By action.
 *  * `Uploaded by` - An Unloaded By action.
 *
 */
export declare enum VideoContextActionEnum {
    AddedTo = "Added to",
    AppearanceBy = "Appearance by",
    LikedBy = "Liked by",
    UploadedBy = "Uploaded by"
}
/**
 * The context of the video's subscription, if this video is part of a subscription.
 */
export declare class VideoContext extends SpeakeasyBase {
    /**
     * The contextual action:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `Added to` - An Added To action.
     *  * `Appearance by` - An Appearance By action.
     *  * `Liked by` - A Liked By action.
     *  * `Uploaded by` - An Unloaded By action.
     *
     */
    action: VideoContextActionEnum;
    /**
     * The contextual resource: a user, group, or channel representation, or an object of a tag.
     */
    resource: Record<string, any>;
    /**
     * The contextual resource type.
     */
    resourceType: string;
}
/**
 * The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `by` - Attribution
 *  * `by-nc` - Attribution Non-Commercial
 *  * `by-nc-nd` - Attribution Non-Commercial No Derivatives
 *  * `by-nc-sa` - Attribution Non-Commercial Share Alike
 *  * `by-nd` - Attribution No Derivatives
 *  * `by-sa` - Attribution Share Alike
 *  * `cc0` - Public Domain Dedication
 *
 */
export declare enum VideoLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
/**
 * Information about the comments on this video.
 */
export declare class VideoMetadataConnectionsComments extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of comments on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the users credited in this video.
 */
export declare class VideoMetadataConnectionsCredits extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options?: string[];
    /**
     * The total number of users on this connection.
     */
    total?: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri?: string;
}
/**
 * Information about the users who have liked this video.
 */
export declare class VideoMetadataConnectionsLikes extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of likes on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this video's ondemand data.
 */
export declare class VideoMetadataConnectionsOndemand extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The On Demand connection resource key.
     */
    resourceKey: string;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this video's thumbnails.
 */
export declare class VideoMetadataConnectionsPictures extends SpeakeasyBase {
    /**
     * An array of HTTP methods allowed on this URI.
     */
    options: string[];
    /**
     * Total number of thumbnails on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * The DRM playback status connection for this video.
 */
export declare class VideoMetadataConnectionsPlayback extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * The recommendations for this video.
 */
export declare class VideoMetadataConnectionsRecommendations extends SpeakeasyBase {
    /**
     * An array of HTTP methods allowed on this URI.
     */
    options?: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri?: string;
}
/**
 * Related content for this video.
 */
export declare class VideoMetadataConnectionsRelated extends SpeakeasyBase {
    /**
     * An array of HTTP methods allowed on this URI.
     */
    options?: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri?: string;
}
/**
 * Information about the video's season.
 */
export declare class VideoMetadataConnectionsSeason extends SpeakeasyBase {
    /**
     * The name of this season.
     */
    name: string;
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this video's text tracks.
 */
export declare class VideoMetadataConnectionsTexttracks extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of text tracks on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this video's VOD trailer.
 */
export declare class VideoMetadataConnectionsTrailer extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The trailer connection resource key.
     */
    resourceKey: string;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the user privacy of this video, if the video privacy is `users`.
 */
export declare class VideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of users on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the versions of this video.
 */
export declare class VideoMetadataConnectionsVersions extends SpeakeasyBase {
    /**
     * The URI of the current version of the video.
     */
    currentUri?: string;
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of versions on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * A list of resource URIs related to the video.
 */
export declare class VideoMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the comments on this video.
     */
    comments: VideoMetadataConnectionsComments;
    /**
     * Information about the users credited in this video.
     */
    credits: VideoMetadataConnectionsCredits;
    /**
     * Information about the users who have liked this video.
     */
    likes: VideoMetadataConnectionsLikes;
    /**
     * Information about this video's ondemand data.
     */
    ondemand: VideoMetadataConnectionsOndemand;
    /**
     * Information about this video's thumbnails.
     */
    pictures: VideoMetadataConnectionsPictures;
    /**
     * The DRM playback status connection for this video.
     */
    playback: VideoMetadataConnectionsPlayback;
    /**
     * The recommendations for this video.
     */
    recommendations: VideoMetadataConnectionsRecommendations;
    /**
     * Related content for this video.
     */
    related: VideoMetadataConnectionsRelated;
    /**
     * Information about the video's season.
     */
    season: VideoMetadataConnectionsSeason;
    /**
     * Information about this video's text tracks.
     */
    texttracks: VideoMetadataConnectionsTexttracks;
    /**
     * Information about this video's VOD trailer.
     */
    trailer: VideoMetadataConnectionsTrailer;
    /**
     * Information about the user privacy of this video, if the video privacy is `users`.
     */
    usersWithAccess: VideoMetadataConnectionsUsersWithAccess;
    /**
     * Information about the versions of this video.
     */
    versions: VideoMetadataConnectionsVersions;
}
/**
 * The user's download access to this On Demand video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `available` - The video is available for download.
 *  * `purchased` - The user has purchased the video.
 *  * `restricted` - The user isn't permitted to download the video.
 *  * `unavailable` - The video isn't available for download.
 *
 */
export declare enum VideoMetadataInteractionsBuyDownloadEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The user's streaming access to this On Demand video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `available` - The video is available for streaming.
 *  * `purchased` - The user has purchased the video.
 *  * `restricted` - The user isn't permitted to stream the video.
 *  * `unavailable` - The video isn't available for streaming
 *
 */
export declare enum VideoMetadataInteractionsBuyStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Buy interaction for a On Demand video.
 */
export declare class VideoMetadataInteractionsBuy extends SpeakeasyBase {
    /**
     * The currency code for the current user's region.
     */
    currency: string;
    /**
     * Formatted price to display to buy an On Demand video.
     */
    displayPrice: string;
    /**
     * The user's download access to this On Demand video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `available` - The video is available for download.
     *  * `purchased` - The user has purchased the video.
     *  * `restricted` - The user isn't permitted to download the video.
     *  * `unavailable` - The video isn't available for download.
     *
     */
    download: VideoMetadataInteractionsBuyDownloadEnum;
    /**
     * Whether the video has DRM.
     */
    drm: boolean;
    /**
     * The URL to buy the On Demand video on Vimeo.
     */
    link: string;
    /**
     * The numeric value of the price for buying the On Demand video.
     */
    price: number;
    /**
     * The time in ISO 8601 format when the On Demand video was purchased.
     */
    purchaseTime: string;
    /**
     * The user's streaming access to this On Demand video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `available` - The video is available for streaming.
     *  * `purchased` - The user has purchased the video.
     *  * `restricted` - The user isn't permitted to stream the video.
     *  * `unavailable` - The video isn't available for streaming
     *
     */
    stream: VideoMetadataInteractionsBuyStreamEnum;
    /**
     * The product URI to purchase the On Demand video.
     */
    uri: string;
}
/**
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
 */
export declare class VideoMetadataInteractionsChannel extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about whether the authenticated user has liked this video.
 */
export declare class VideoMetadataInteractionsLike extends SpeakeasyBase {
    /**
     * Whether the user has liked the video.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format when the user liked the video.
     */
    addedTime: string;
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * The user's streaming access to this On Demand video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `available` - The video is available for streaming.
 *  * `purchased` - The user has purchased the video.
 *  * `restricted` - The user isn't permitted to stream the video.
 *  * `unavailable` - The video isn't available for streaming.
 *
 */
export declare enum VideoMetadataInteractionsRentStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Rent interaction for an On Demand video.
 */
export declare class VideoMetadataInteractionsRent extends SpeakeasyBase {
    /**
     * The currency code for the current user's region.
     */
    currency: string;
    /**
     * Formatted price to display to rent an On Demand video.
     */
    displayPrice: string;
    /**
     * Whether the video has DRM.
     */
    drm: boolean;
    /**
     * The time in ISO 8601 format when the rental period for the video expires.
     */
    expiresTime: string;
    /**
     * The URL to rent the On Demand video on Vimeo.
     */
    link: string;
    /**
     * The numeric value of the price for buying the On Demand video.
     */
    price: number;
    /**
     * The time in ISO 8601 format when the On Demand video was rented.
     */
    purchaseTime: string;
    /**
     * The user's streaming access to this On Demand video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `available` - The video is available for streaming.
     *  * `purchased` - The user has purchased the video.
     *  * `restricted` - The user isn't permitted to stream the video.
     *  * `unavailable` - The video isn't available for streaming.
     *
     */
    stream: VideoMetadataInteractionsRentStreamEnum;
    /**
     * The product URI to rent the On Demand video.
     */
    uri: string;
}
/**
 * Information about where and how to report a video.
 */
export declare class VideoMetadataInteractionsReport extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * A list of valid reasons for reporting a video.
     */
    reason: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Subscription information for an On Demand video.
 */
export declare class VideoMetadataInteractionsSubscribe extends SpeakeasyBase {
    /**
     * Whether the video has DRM.
     */
    drm?: boolean;
    /**
     * The time in ISO 8601 format when the subscription expires.
     */
    expiresTime?: string;
    /**
     * The tine in ISO 8601 format when the subscription was purchased.
     */
    purchaseTime?: string;
    /**
     * The stream type.
     */
    stream?: string;
}
/**
 * Information about removing this video from the user's list of watched videos.
 */
export declare class VideoMetadataInteractionsWatched extends SpeakeasyBase {
    /**
     * Whether the user has watched the video.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format when the user watched the video.
     */
    addedTime: string;
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about whether this video appears on the authenticated user's Watch Later list.
 */
export declare class VideoMetadataInteractionsWatchlater extends SpeakeasyBase {
    /**
     * Whether the user has added the video to their Watch later list.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format when the user added the video to their Watch Later list.
     */
    addedTime: string;
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * A list of resource URIs related to the video.
 */
export declare class VideoMetadataInteractions extends SpeakeasyBase {
    /**
     * The Buy interaction for a On Demand video.
     */
    buy: VideoMetadataInteractionsBuy;
    /**
     * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
     */
    channel: VideoMetadataInteractionsChannel;
    /**
     * Information about whether the authenticated user has liked this video.
     */
    like: VideoMetadataInteractionsLike;
    /**
     * The Rent interaction for an On Demand video.
     */
    rent: VideoMetadataInteractionsRent;
    /**
     * Information about where and how to report a video.
     */
    report: VideoMetadataInteractionsReport;
    /**
     * Subscription information for an On Demand video.
     */
    subscribe?: VideoMetadataInteractionsSubscribe;
    /**
     * Information about removing this video from the user's list of watched videos.
     */
    watched: VideoMetadataInteractionsWatched;
    /**
     * Information about whether this video appears on the authenticated user's Watch Later list.
     */
    watchlater: VideoMetadataInteractionsWatchlater;
}
/**
 * The video's metadata.
 */
export declare class VideoMetadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the video.
     */
    connections: VideoMetadataConnections;
    /**
     * A list of resource URIs related to the video.
     */
    interactions: VideoMetadataInteractions;
}
/**
 * A standard connection object indicating how to get all the videos in this project.
 */
export declare class VideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
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
 * A list of resource URIs related to the project.
 */
export declare class VideoProjectMetadataConnections extends SpeakeasyBase {
    /**
     * A standard connection object indicating how to get all the videos in this project.
     */
    videos: VideoProjectMetadataConnectionsVideos;
}
/**
 * The project's metadata.
 */
export declare class VideoProjectMetadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the project.
     */
    connections: VideoProjectMetadataConnections;
}
/**
 * Information about the folder that contains this video.
 */
export declare class VideoProject extends SpeakeasyBase {
    /**
     * The time in ISO 8601 format when the project was created.
     */
    createdTime: string;
    /**
     * The project's metadata.
     */
    metadata: VideoProjectMetadata;
    /**
     * The time in ISO 8601 format when the project was last modified.
     */
    modifiedTime: string;
    /**
     * The name of the folder.
     */
    name: string;
    /**
     * The resource key string of the project.
     */
    resourceKey: string;
    /**
     * The URI of the project.
     */
    uri: string;
    /**
     * The owner of the project.
     */
    user: User;
}
/**
 * Who can comment on the video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can comment on the video.
 *  * `contacts` - Only contacts can comment on the video.
 *  * `nobody` - No one can comment on the video.
 *
 */
export declare enum VideoPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
/**
 * The video's embed permission setting:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `private` - The video is private.
 *  * `public` - Anyone can embed the video.
 *
 */
export declare enum VideoPrivacyEmbedEnum {
    Private = "private",
    Public = "public"
}
/**
 * The general privacy setting for the video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can view the video.
 *  * `contacts` - Only contacts can view the video.
 *  * `disable` - Hide from vimeo
 *  * `nobody` - No one besides the owner can view the video.
 *  * `password` - Anyone with the video's password can view the video.
 *  * `unlisted` - Not searchable from vimeo.com
 *  * `users` - Only people with a Vimeo account can view the video.
 *
 */
export declare enum VideoPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
/**
 * The video's privacy setting.
 */
export declare class VideoPrivacy extends SpeakeasyBase {
    /**
     * Whether the video can be added to collections.
     */
    add: boolean;
    /**
     * Who can comment on the video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can comment on the video.
     *  * `contacts` - Only contacts can comment on the video.
     *  * `nobody` - No one can comment on the video.
     *
     */
    comments: VideoPrivacyCommentsEnum;
    /**
     * The video's download permission setting.
     */
    download: boolean;
    /**
     * The video's embed permission setting:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `private` - The video is private.
     *  * `public` - Anyone can embed the video.
     *
     */
    embed: VideoPrivacyEmbedEnum;
    /**
     * The general privacy setting for the video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can view the video.
     *  * `contacts` - Only contacts can view the video.
     *  * `disable` - Hide from vimeo
     *  * `nobody` - No one besides the owner can view the video.
     *  * `password` - Anyone with the video's password can view the video.
     *  * `unlisted` - Not searchable from vimeo.com
     *  * `users` - Only people with a Vimeo account can view the video.
     *
     */
    view: VideoPrivacyViewEnum;
}
export declare class VideoSpatialDirectorTimeline extends SpeakeasyBase {
    /**
     * The director timeline pitch, from -90 (minimum) to 90 (maximum).
     */
    pitch?: number;
    /**
     * The director timeline roll.
     */
    roll?: number;
    /**
     * The director timeline time code.
     */
    timeCode?: number;
    /**
     * The director timeline yaw, from 0 (minimum) to 360 (maximum).
     */
    yaw?: number;
}
/**
 * The 360 spatial projection:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `cubical` - The spatial projection is cubical.
 *  * `cylindrical` - The spatial projection is cylindrical.
 *  * `dome` - The spatial projection is dome-shaped.
 *  * `equirectangular` - The spatial projection is equirectangular.
 *  * `pyramid` - The spatial projection is pyramid-shaped.
 *
 */
export declare enum VideoSpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
/**
 * The 360 stereo format:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `left-right` - The stereo format is left-right.
 *  * `mono` - The audio is monaural.
 *  * `top-bottom` - The stereo format is top-bottom.
 *
 */
export declare enum VideoSpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
/**
 * 360 spatial data.
 */
export declare class VideoSpatial extends SpeakeasyBase {
    /**
     * 360 director timeline.
     */
    directorTimeline: VideoSpatialDirectorTimeline[];
    /**
     * The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
     */
    fieldOfView: number;
    /**
     * The 360 spatial projection:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `cubical` - The spatial projection is cubical.
     *  * `cylindrical` - The spatial projection is cylindrical.
     *  * `dome` - The spatial projection is dome-shaped.
     *  * `equirectangular` - The spatial projection is equirectangular.
     *  * `pyramid` - The spatial projection is pyramid-shaped.
     *
     */
    projection: VideoSpatialProjectionEnum;
    /**
     * The 360 stereo format:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `left-right` - The stereo format is left-right.
     *  * `mono` - The audio is monaural.
     *  * `top-bottom` - The stereo format is top-bottom.
     *
     */
    stereoFormat: VideoSpatialStereoFormatEnum;
}
/**
 * A collection of stats associated with this video.
 */
export declare class VideoStats extends SpeakeasyBase {
    /**
     * The current total number of times that the video has been played.
     */
    plays: number;
}
/**
 * The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `available` - The video is available.
 *  * `quota_exceeded` - The user's quota is exceeded with this video.
 *  * `total_cap_exceeded` - The user has exceeded their total cap with this video.
 *  * `transcode_starting` - Transcoding is beginning for the video.
 *  * `transcoding` - Transcoding is underway for the video.
 *  * `transcoding_error` - There was an error in transcoding the video.
 *  * `unavailable` - The video is unavailable.
 *  * `uploading` - The video is being uploaded.
 *  * `uploading_error` - There was an error in uploading the video.
 *
 */
export declare enum VideoStatusEnum {
    Available = "available",
    QuotaExceeded = "quota_exceeded",
    TotalCapExceeded = "total_cap_exceeded",
    TranscodeStarting = "transcode_starting",
    Transcoding = "transcoding",
    TranscodingError = "transcoding_error",
    Unavailable = "unavailable",
    Uploading = "uploading",
    UploadingError = "uploading_error"
}
/**
 * Status code for this video's availability.
 */
export declare enum VideoTranscodeStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The transcode information for a video upload.
 */
export declare class VideoTranscode extends SpeakeasyBase {
    /**
     * Status code for this video's availability.
     */
    status?: VideoTranscodeStatusEnum;
}
/**
 * The approach for uploading the video.
 */
export declare enum VideoUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
/**
 * The status code for the availability of the uploaded video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `complete` - The upload is complete.
 *  * `error` - The upload ended with an error.
 *  * `in_progress` - The upload is underway.
 *
 */
export declare enum VideoUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The upload information for this video.
 */
export declare class VideoUpload extends SpeakeasyBase {
    /**
     * The approach for uploading the video.
     */
    approach?: VideoUploadApproachEnum;
    /**
     * The URI for completing the upload.
     */
    completeUri?: string;
    /**
     * The HTML form for uploading a video through the post approach.
     */
    form?: string;
    /**
     * The link of the video to capture through the pull approach.
     */
    link?: string;
    /**
     * The redirect URL for the upload app.
     */
    redirectUrl?: string;
    /**
     * The file size in bytes of the uploaded video.
     */
    size?: number;
    /**
     * The status code for the availability of the uploaded video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `complete` - The upload is complete.
     *  * `error` - The upload ended with an error.
     *  * `in_progress` - The upload is underway.
     *
     */
    status: VideoUploadStatusEnum;
    /**
     * The link for sending video file data.
     */
    uploadLink?: string;
}
/**
 * The user's account type:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `basic` - The user has a Vimeo Basic subscription.
 *  * `business` - The user has a Vimeo Business subscription.
 *  * `live_business` - The user has a Vimeo Business Live subscription.
 *  * `live_premium` - The user has a Vimeo Premium subscription.
 *  * `live_pro` - The user has a Vimeo PRO Live subscription.
 *  * `plus` - The user has a Vimeo Plus subscription.
 *  * `pro` - The user has a Vimeo Pro subscription.
 *  * `pro_unlimited` - The user has a Vimeo PRO Unlimited subscription.
 *  * `producer` - The user has a Vimeo Producer subscription.
 *
 */
export declare enum VideoUserAccountEnum {
    Basic = "basic",
    Business = "business",
    LiveBusiness = "live_business",
    LivePremium = "live_premium",
    LivePro = "live_pro",
    Plus = "plus",
    Pro = "pro",
    ProUnlimited = "pro_unlimited",
    Producer = "producer"
}
/**
 * The user's content filters:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `drugs` - Drugs or alcohol use.
 *  * `language` - Profanity or sexually suggestive content.
 *  * `nudity` - Nudity.
 *  * `safe` - Suitable for all audiences.
 *  * `unrated` - No rating.
 *  * `violence` - Violent or graphic content.
 *
 */
export declare enum VideoUserContentFilterEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}
/**
 * Information about the albums created by this user.
 */
export declare class VideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of albums on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the appearances of this user in other videos.
 */
export declare class VideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of appearances on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
 */
export declare class VideoUserMetadataConnectionsBlock extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     */
    options: string[];
    /**
     * The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * Information about this user's followed categories.
 */
export declare class VideoUserMetadataConnectionsCategories extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of categories on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this user's subscribed channels.
 */
export declare class VideoUserMetadataConnectionsChannels extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of channels on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this user's feed.
 */
export declare class VideoUserMetadataConnectionsFeed extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this user's folders.
 */
export declare class VideoUserMetadataConnectionsFolders extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of folders on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the user's followers.
 */
export declare class VideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of followers on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the users that the current user is following.
 */
export declare class VideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of users on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the groups created by this user.
 */
export declare class VideoUserMetadataConnectionsGroups extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of groups on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the videos that this user has liked.
 */
export declare class VideoUserMetadataConnectionsLikes extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of likes on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the channels that this user moderates.
 */
export declare class VideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of channels on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this user's portraits.
 */
export declare class VideoUserMetadataConnectionsPictures extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of pictures on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about this user's portfolios.
 */
export declare class VideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of portfolios on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
 */
export declare class VideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     */
    options: string[];
    /**
     * The total number of channels on this connection. This data requires a bearer token with the `private` scope.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
 */
export declare class VideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     */
    options: string[];
    /**
     * The total number of users on this connection. This data requires a bearer token with the `private` scope.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * Information about the videos that have been shared with this user.
 */
export declare class VideoUserMetadataConnectionsShared extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
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
 * Information about the videos uploaded by this user.
 */
export declare class VideoUserMetadataConnectionsVideos extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
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
 * Information about the videos that this user has watched.
 */
export declare class VideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
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
 * Information about the videos that this user wants to watch later.
 */
export declare class VideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
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
 * The list of resource URIs related to the user.
 */
export declare class VideoUserMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the albums created by this user.
     */
    albums: VideoUserMetadataConnectionsAlbums;
    /**
     * Information about the appearances of this user in other videos.
     */
    appearances: VideoUserMetadataConnectionsAppearances;
    /**
     * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
     */
    block: VideoUserMetadataConnectionsBlock;
    /**
     * Information about this user's followed categories.
     */
    categories: VideoUserMetadataConnectionsCategories;
    /**
     * Information about this user's subscribed channels.
     */
    channels: VideoUserMetadataConnectionsChannels;
    /**
     * Information about this user's feed.
     */
    feed: VideoUserMetadataConnectionsFeed;
    /**
     * Information about this user's folders.
     */
    folders: VideoUserMetadataConnectionsFolders;
    /**
     * Information about the user's followers.
     */
    followers: VideoUserMetadataConnectionsFollowers;
    /**
     * Information about the users that the current user is following.
     */
    following: VideoUserMetadataConnectionsFollowing;
    /**
     * Information about the groups created by this user.
     */
    groups: VideoUserMetadataConnectionsGroups;
    /**
     * Information about the videos that this user has liked.
     */
    likes: VideoUserMetadataConnectionsLikes;
    /**
     * Information about the channels that this user moderates.
     */
    moderatedChannels: VideoUserMetadataConnectionsModeratedChannels;
    /**
     * Information about this user's portraits.
     */
    pictures: VideoUserMetadataConnectionsPictures;
    /**
     * Information about this user's portfolios.
     */
    portfolios: VideoUserMetadataConnectionsPortfolios;
    /**
     * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedChannels: VideoUserMetadataConnectionsRecommendedChannels;
    /**
     * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedUsers: VideoUserMetadataConnectionsRecommendedUsers;
    /**
     * Information about the videos that have been shared with this user.
     */
    shared: VideoUserMetadataConnectionsShared;
    /**
     * Information about the videos uploaded by this user.
     */
    videos: VideoUserMetadataConnectionsVideos;
    /**
     * Information about the videos that this user has watched.
     */
    watchedVideos: VideoUserMetadataConnectionsWatchedVideos;
    /**
     * Information about the videos that this user wants to watch later.
     */
    watchlater: VideoUserMetadataConnectionsWatchlater;
}
export declare class VideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
    /**
     * An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     */
    options?: string[];
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     */
    uri?: string;
}
/**
 * Information related to the block status of this user.
 */
export declare class VideoUserMetadataInteractionsBlock extends SpeakeasyBase {
    /**
     * Whether a user is blocking the current user.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format when the block occurred, or the null value if no block exists.
     */
    addedTime: string;
    /**
     * An array of the HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The URI to block or unblock the user.
     */
    uri: string;
}
/**
 * Information related to the followed status of this user.
 */
export declare class VideoUserMetadataInteractionsFollow extends SpeakeasyBase {
    /**
     * Whether a user is following the current user.
     */
    added: boolean;
    /**
     * An array of the HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The URI to follow the user.
     */
    uri: string;
}
/**
 * Information regarding where and how to report a user.
 */
export declare class VideoUserMetadataInteractionsReport extends SpeakeasyBase {
    /**
     * An array of the HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * List of valid reasons for reporting a video.
     */
    reason: string[];
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
export declare class VideoUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: VideoUserMetadataInteractionsAddPrivacyUser;
    /**
     * Information related to the block status of this user.
     */
    block: VideoUserMetadataInteractionsBlock;
    /**
     * Information related to the followed status of this user.
     */
    follow: VideoUserMetadataInteractionsFollow;
    /**
     * Information regarding where and how to report a user.
     */
    report: VideoUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
 */
export declare class VideoUserMetadata extends SpeakeasyBase {
    /**
     * The list of resource URIs related to the user.
     */
    connections: VideoUserMetadataConnections;
    interactions: VideoUserMetadataInteractions;
}
/**
 * The user's privacy preference for comments:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can comment on the user's videos.
 *  * `contacts` - Only contacts can comment on the user's videos.
 *  * `nobody` - No one can comment on the user's videos.
 *
 */
export declare enum VideoUserPreferencesVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
/**
 * The user's privacy preference for embeds:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `private` - Only the user can embed their own videos.
 *  * `public` - Anyone can embed the user's videos.
 *  * `whitelist` - Only those on the whitelist can embed the user's videos.
 *
 */
export declare enum VideoUserPreferencesVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
/**
 * The user's privacy preference for views:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can view the user's videos.
 *  * `contacts` - Only contacts can view the user's videos.
 *  * `disable` - Views are disabled for the user's videos.
 *  * `nobody` - No one except the user can view the user's videos.
 *  * `password` - Only those with the password can view the user's videos.
 *  * `unlisted` - Anybody can view the user's videos if they have a link.
 *  * `users` - Only other Vimeo members can view the user's videos.
 *
 */
export declare enum VideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class VideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
    /**
     * Whether other users can add the user's videos.
     */
    add?: boolean;
    /**
     * The user's privacy preference for comments:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can comment on the user's videos.
     *  * `contacts` - Only contacts can comment on the user's videos.
     *  * `nobody` - No one can comment on the user's videos.
     *
     */
    comments?: VideoUserPreferencesVideosPrivacyCommentsEnum;
    /**
     * Whether other users can download the user's videos.
     */
    download?: boolean;
    /**
     * The user's privacy preference for embeds:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `private` - Only the user can embed their own videos.
     *  * `public` - Anyone can embed the user's videos.
     *  * `whitelist` - Only those on the whitelist can embed the user's videos.
     *
     */
    embed?: VideoUserPreferencesVideosPrivacyEmbedEnum;
    /**
     * The user's privacy preference for views:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can view the user's videos.
     *  * `contacts` - Only contacts can view the user's videos.
     *  * `disable` - Views are disabled for the user's videos.
     *  * `nobody` - No one except the user can view the user's videos.
     *  * `password` - Only those with the password can view the user's videos.
     *  * `unlisted` - Anybody can view the user's videos if they have a link.
     *  * `users` - Only other Vimeo members can view the user's videos.
     *
     */
    view?: VideoUserPreferencesVideosPrivacyViewEnum;
}
export declare class VideoUserPreferencesVideos extends SpeakeasyBase {
    privacy?: VideoUserPreferencesVideosPrivacy;
}
export declare class VideoUserPreferences extends SpeakeasyBase {
    videos?: VideoUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
 */
export declare class VideoUserUploadQuotaLifetime extends SpeakeasyBase {
    /**
     * The number of bytes remaining in your lifetime maximum.
     */
    free: number;
    /**
     * The total number of bytes that you can upload across the lifetime of your account.
     */
    max: number;
    /**
     * The number of bytes that you've already uploaded against your lifetime limit.
     */
    used: number;
}
/**
 * Information about the user's usage for the current period.
 */
export declare class VideoUserUploadQuotaPeriodic extends SpeakeasyBase {
    /**
     * The number of bytes remaining in your upload quota for the current period.
     */
    free: number;
    /**
     * The total number of bytes that you can upload per period.
     */
    max: number;
    /**
     * The time in ISO 8601 format when your upload quota resets.
     */
    resetDate: string;
    /**
     * The number of bytes that you've already uploaded against your quota in the current period.
     */
    used: number;
}
/**
 * Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
 */
export declare enum VideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
 */
export declare class VideoUserUploadQuotaSpace extends SpeakeasyBase {
    /**
     * The number of bytes remaining in your upload quota.
     */
    free: number;
    /**
     * The maximum number of bytes allotted to your upload quota.
     */
    max: number;
    /**
     * Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
     */
    showing: VideoUserUploadQuotaSpaceShowingEnum;
    /**
     * The number of bytes that you've already uploaded against your quota.
     */
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
 */
export declare class VideoUserUploadQuota extends SpeakeasyBase {
    /**
     * Information about the user's lifetime upload usage.
     */
    lifetime: VideoUserUploadQuotaLifetime;
    /**
     * Information about the user's usage for the current period.
     */
    periodic: VideoUserUploadQuotaPeriodic;
    /**
     * Information about the user's upload space remaining for the current period.
     */
    space: VideoUserUploadQuotaSpace;
}
export declare class VideoUserWebsites extends SpeakeasyBase {
    /**
     * The website's description.
     */
    description: string;
    /**
     * The URL of the website.
     */
    link: string;
    /**
     * The name of the website.
     */
    name: string;
}
/**
 * The video owner.
 */
export declare class VideoUser extends SpeakeasyBase {
    /**
     * The user's account type:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `basic` - The user has a Vimeo Basic subscription.
     *  * `business` - The user has a Vimeo Business subscription.
     *  * `live_business` - The user has a Vimeo Business Live subscription.
     *  * `live_premium` - The user has a Vimeo Premium subscription.
     *  * `live_pro` - The user has a Vimeo PRO Live subscription.
     *  * `plus` - The user has a Vimeo Plus subscription.
     *  * `pro` - The user has a Vimeo Pro subscription.
     *  * `pro_unlimited` - The user has a Vimeo PRO Unlimited subscription.
     *  * `producer` - The user has a Vimeo Producer subscription.
     *
     */
    account: VideoUserAccountEnum;
    /**
     * The user's bio.
     */
    bio: string;
    /**
     * The user's content filters:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `drugs` - Drugs or alcohol use.
     *  * `language` - Profanity or sexually suggestive content.
     *  * `nudity` - Nudity.
     *  * `safe` - Suitable for all audiences.
     *  * `unrated` - No rating.
     *  * `violence` - Violent or graphic content.
     *
     */
    contentFilter?: VideoUserContentFilterEnum;
    /**
     * The time in ISO 8601 format when the user account was created.
     */
    createdTime: string;
    /**
     * The user's email address. This data requires a bearer token with the `email` scope.
     */
    email?: string;
    /**
     * The absolute URL of this user's profile page.
     */
    link: string;
    /**
     * The user's location.
     */
    location: string;
    /**
     * The user's metadata.
     */
    metadata: VideoUserMetadata;
    /**
     * The user's display name.
     */
    name: string;
    /**
     * The active portrait of this user.
     */
    pictures: Picture;
    preferences?: VideoUserPreferences;
    /**
     * The user's resource key string.
     */
    resourceKey: string;
    /**
     * Appears only when the user has upload access and is looking at their own user record.
     */
    uploadQuota: VideoUserUploadQuota;
    /**
     * The user's canonical relative URI.
     */
    uri: string;
    /**
     * The user's websites.
     */
    websites: VideoUserWebsites[];
}
/**
 * The video belongs to the category.
 */
export declare class Video extends SpeakeasyBase {
    /**
     * The categories to which this video belongs.
     */
    categories: Category[];
    /**
     * The content ratings of this video.
     */
    contentRating: string[];
    /**
     * The context of the video's subscription, if this video is part of a subscription.
     */
    context: VideoContext;
    /**
     * The time in ISO 8601 format when the video was created.
     */
    createdTime: string;
    /**
     * A brief explanation of the video's content.
     */
    description: string;
    /**
     * The video's duration in seconds.
     */
    duration: number;
    /**
     * Information about embedding this video.
     */
    embed: EmbedSettings;
    /**
     * The video's height in pixels.
     */
    height: number;
    /**
     * The video's primary language.
     */
    language: string;
    /**
     * The time in ISO 8601 format when the user last modified the video.
     */
    lastUserActionEventDate?: string;
    /**
     * The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `by` - Attribution
     *  * `by-nc` - Attribution Non-Commercial
     *  * `by-nc-nd` - Attribution Non-Commercial No Derivatives
     *  * `by-nc-sa` - Attribution Non-Commercial Share Alike
     *  * `by-nd` - Attribution No Derivatives
     *  * `by-sa` - Attribution Share Alike
     *  * `cc0` - Public Domain Dedication
     *
     */
    license: VideoLicenseEnum;
    /**
     * The link to the video.
     */
    link: string;
    /**
     * The video's metadata.
     */
    metadata: VideoMetadata;
    /**
     * The time in ISO 8601 format when the video metadata was last modified.
     */
    modifiedTime: string;
    /**
     * The video's title.
     */
    name: string;
    /**
     * Information about the folder that contains this video.
     */
    parentFolder?: VideoProject;
    /**
     * The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.
     */
    password?: string;
    /**
     * The active picture for this video.
     */
    pictures: Picture;
    /**
     * The video's privacy setting.
     */
    privacy: VideoPrivacy;
    /**
     * The time in ISO 8601 format when the video was released.
     */
    releaseTime: string;
    /**
     * The resource key string of the video.
     */
    resourceKey: string;
    /**
     * 360 spatial data.
     */
    spatial: VideoSpatial;
    /**
     * A collection of stats associated with this video.
     */
    stats: VideoStats;
    /**
     * The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `available` - The video is available.
     *  * `quota_exceeded` - The user's quota is exceeded with this video.
     *  * `total_cap_exceeded` - The user has exceeded their total cap with this video.
     *  * `transcode_starting` - Transcoding is beginning for the video.
     *  * `transcoding` - Transcoding is underway for the video.
     *  * `transcoding_error` - There was an error in transcoding the video.
     *  * `unavailable` - The video is unavailable.
     *  * `uploading` - The video is being uploaded.
     *  * `uploading_error` - There was an error in uploading the video.
     *
     */
    status: VideoStatusEnum;
    /**
     * An array of all tags assigned to this video.
     */
    tags: Tag[];
    /**
     * The transcode information for a video upload.
     */
    transcode: VideoTranscode;
    /**
     * The upload information for this video.
     */
    upload: VideoUpload;
    /**
     * The video's canonical relative URI.
     */
    uri: string;
    /**
     * The video owner.
     */
    user: VideoUser;
    /**
     * The video's width in pixels.
     */
    width: number;
}

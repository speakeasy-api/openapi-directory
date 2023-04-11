import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { OnDemandGenre } from "./ondemandgenre";
import { Picture } from "./picture";
import { PurchaseInteraction } from "./purchaseinteraction";
import { Tag } from "./tag";
import { User } from "./user";
import { Video } from "./video";
export declare class OnDemandPagePictureSizes extends SpeakeasyBase {
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
export declare enum OnDemandPagePictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}
/**
 * The background image for the On Demand page on Vimeo.
 */
export declare class OnDemandPagePicture extends SpeakeasyBase {
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
    sizes: OnDemandPagePictureSizes[];
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
    type: OnDemandPagePictureTypeEnum;
    /**
     * The picture's URI.
     */
    uri: string;
}
/**
 * The primary and secondary colors used for rendering this On Demand page.
 */
export declare class OnDemandPageColors extends SpeakeasyBase {
    /**
     * The hexadecimal color code for the page's primary color.
     */
    primary: string;
    /**
     * The hexadecimal color code for the page's secondary color.
     */
    secondary: string;
}
export declare class OnDemandPageEpisodesBuy extends SpeakeasyBase {
    /**
     * Whether all the videos on this On Demand page can be purchased as a whole.
     */
    active: boolean;
    /**
     * The default price to buy an episode.
     */
    price: number;
}
/**
 * The rental period for the video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `1 day` - The rental period is one day.
 *  * `1 month` - The rental period is one month.
 *  * `1 week` - The rental period is one week.
 *  * `1 year` - The rental period is one year.
 *  * `2 day` - The rental period is two days.
 *  * `24 hour` - The rental period is 24 hours.
 *  * `3 day` - The rental period is three days.
 *  * `3 month` - The rental period is three months.
 *  * `30 day` - The rental period is 30 days.
 *  * `48 hour` - The rental period is 48 hours.
 *  * `6 month` - The rental period is six months.
 *  * `60 day` - The rental period is 60 days.
 *  * `7 day` - The rental period is 7 days.
 *  * `72 hour` - The rental period is 72 hours.
 *
 */
export declare enum OnDemandPageEpisodesRentPeriodEnum {
    OneDay = "1 day",
    OneMonth = "1 month",
    OneWeek = "1 week",
    OneYear = "1 year",
    TwoDay = "2 day",
    TwentyFourHour = "24 hour",
    ThreeDay = "3 day",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SixtyDay = "60 day",
    SevenDay = "7 day",
    SeventyTwoHour = "72 hour"
}
export declare class OnDemandPageEpisodesRent extends SpeakeasyBase {
    /**
     * Whether all the videos on this On Demand page can be rented as a whole.
     */
    active: boolean;
    /**
     * The rental period for the video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `1 day` - The rental period is one day.
     *  * `1 month` - The rental period is one month.
     *  * `1 week` - The rental period is one week.
     *  * `1 year` - The rental period is one year.
     *  * `2 day` - The rental period is two days.
     *  * `24 hour` - The rental period is 24 hours.
     *  * `3 day` - The rental period is three days.
     *  * `3 month` - The rental period is three months.
     *  * `30 day` - The rental period is 30 days.
     *  * `48 hour` - The rental period is 48 hours.
     *  * `6 month` - The rental period is six months.
     *  * `60 day` - The rental period is 60 days.
     *  * `7 day` - The rental period is 7 days.
     *  * `72 hour` - The rental period is 72 hours.
     *
     */
    period: OnDemandPageEpisodesRentPeriodEnum;
    /**
     * The default price to rent an episode.
     */
    price: number;
}
/**
 * Information about this On Demand page's episodes, if the page is for a series.
 */
export declare class OnDemandPageEpisodes extends SpeakeasyBase {
    buy: OnDemandPageEpisodesBuy;
    rent: OnDemandPageEpisodesRent;
}
/**
 * Information about the comments associated with this page.
 */
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsComments extends SpeakeasyBase {
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
 * Information about the genres associated with this page.
 */
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsGenres extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of genres on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the likes associated with this page.
 */
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsLikes extends SpeakeasyBase {
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
 * Information about the pictures associated with this page.
 */
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsPictures extends SpeakeasyBase {
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
 * Information about the seasons associated with this page.
 */
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of seasons on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * Information about the videos associated with this page.
 */
export declare class OnDemandPageMetadataConnectionsMetadataConnectionsVideos extends SpeakeasyBase {
    /**
     * The total number of extra videos.
     */
    extraTotal: number;
    /**
     * The total number of main videos.
     */
    mainTotal: number;
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
    /**
     * The total number of viewable videos.
     */
    viewableTotal: number;
}
export declare class OnDemandPageMetadataConnectionsMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the comments associated with this page.
     */
    comments: OnDemandPageMetadataConnectionsMetadataConnectionsComments;
    /**
     * Information about the genres associated with this page.
     */
    genres: OnDemandPageMetadataConnectionsMetadataConnectionsGenres;
    /**
     * Information about the likes associated with this page.
     */
    likes: OnDemandPageMetadataConnectionsMetadataConnectionsLikes;
    /**
     * Information about the pictures associated with this page.
     */
    pictures: OnDemandPageMetadataConnectionsMetadataConnectionsPictures;
    /**
     * Information about the seasons associated with this page.
     */
    seasons: OnDemandPageMetadataConnectionsMetadataConnectionsSeasons;
    /**
     * Information about the videos associated with this page.
     */
    videos: OnDemandPageMetadataConnectionsMetadataConnectionsVideos;
}
export declare class OnDemandPageMetadataConnectionsMetadata extends SpeakeasyBase {
    connections: OnDemandPageMetadataConnectionsMetadataConnections;
}
/**
 * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
 */
export declare class OnDemandPageMetadataConnections extends SpeakeasyBase {
    metadata: OnDemandPageMetadataConnectionsMetadata;
}
/**
 * Metadata about the On Demand page.
 */
export declare class OnDemandPageMetadata extends SpeakeasyBase {
    /**
     * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
     */
    connections: OnDemandPageMetadataConnections;
    /**
     * The user's available purchase interactions.
     */
    interactions: PurchaseInteraction;
}
export declare class OnDemandPagePreorder extends SpeakeasyBase {
    /**
     * Whether this page is available for preorder.
     */
    active: boolean;
    /**
     * The time in ISO 8601 format when the preorder was cancelled.
     */
    cancelTime: string;
    /**
     * The time in ISO 8601 format when the preorder was released to the public.
     */
    publishTime: string;
    /**
     * The time in ISO 8601 format when the preorder started.
     */
    time: string;
}
export declare class OnDemandPagePublished extends SpeakeasyBase {
    /**
     * Whether this On Demand page has been published.
     */
    enabled: boolean;
    /**
     * The time in IS 8601 format when this page was published.
     */
    time: string;
}
/**
 * Information about subscribing to this On Demand page, if enabled.
 */
export declare class OnDemandPageSubscription extends SpeakeasyBase {
    /**
     * Whether this product is active.
     */
    active: boolean;
    /**
     * The link to this product on Vimeo.
     */
    link: string;
    /**
     * The product's rental period.
     */
    period?: string;
    /**
     * The accepted currencies and respective pricing for this product.
     */
    price: Record<string, any>;
}
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
export declare enum OnDemandPageVideoContextActionEnum {
    AddedTo = "Added to",
    AppearanceBy = "Appearance by",
    LikedBy = "Liked by",
    UploadedBy = "Uploaded by"
}
/**
 * The context of the video's subscription, if this video is part of a subscription.
 */
export declare class OnDemandPageVideoContext extends SpeakeasyBase {
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
    action: OnDemandPageVideoContextActionEnum;
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
export declare enum OnDemandPageVideoLicenseEnum {
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
export declare class OnDemandPageVideoMetadataConnectionsComments extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsCredits extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsLikes extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsOndemand extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsPictures extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsPlayback extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsRecommendations extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsRelated extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsSeason extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsTexttracks extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsTrailer extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsUsersWithAccess extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnectionsVersions extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the comments on this video.
     */
    comments: OnDemandPageVideoMetadataConnectionsComments;
    /**
     * Information about the users credited in this video.
     */
    credits: OnDemandPageVideoMetadataConnectionsCredits;
    /**
     * Information about the users who have liked this video.
     */
    likes: OnDemandPageVideoMetadataConnectionsLikes;
    /**
     * Information about this video's ondemand data.
     */
    ondemand: OnDemandPageVideoMetadataConnectionsOndemand;
    /**
     * Information about this video's thumbnails.
     */
    pictures: OnDemandPageVideoMetadataConnectionsPictures;
    /**
     * The DRM playback status connection for this video.
     */
    playback: OnDemandPageVideoMetadataConnectionsPlayback;
    /**
     * The recommendations for this video.
     */
    recommendations: OnDemandPageVideoMetadataConnectionsRecommendations;
    /**
     * Related content for this video.
     */
    related: OnDemandPageVideoMetadataConnectionsRelated;
    /**
     * Information about the video's season.
     */
    season: OnDemandPageVideoMetadataConnectionsSeason;
    /**
     * Information about this video's text tracks.
     */
    texttracks: OnDemandPageVideoMetadataConnectionsTexttracks;
    /**
     * Information about this video's VOD trailer.
     */
    trailer: OnDemandPageVideoMetadataConnectionsTrailer;
    /**
     * Information about the user privacy of this video, if the video privacy is `users`.
     */
    usersWithAccess: OnDemandPageVideoMetadataConnectionsUsersWithAccess;
    /**
     * Information about the versions of this video.
     */
    versions: OnDemandPageVideoMetadataConnectionsVersions;
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
export declare enum OnDemandPageVideoMetadataInteractionsBuyDownloadEnum {
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
export declare enum OnDemandPageVideoMetadataInteractionsBuyStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Buy interaction for a On Demand video.
 */
export declare class OnDemandPageVideoMetadataInteractionsBuy extends SpeakeasyBase {
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
    download: OnDemandPageVideoMetadataInteractionsBuyDownloadEnum;
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
    stream: OnDemandPageVideoMetadataInteractionsBuyStreamEnum;
    /**
     * The product URI to purchase the On Demand video.
     */
    uri: string;
}
/**
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
 */
export declare class OnDemandPageVideoMetadataInteractionsChannel extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataInteractionsLike extends SpeakeasyBase {
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
export declare enum OnDemandPageVideoMetadataInteractionsRentStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * The Rent interaction for an On Demand video.
 */
export declare class OnDemandPageVideoMetadataInteractionsRent extends SpeakeasyBase {
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
    stream: OnDemandPageVideoMetadataInteractionsRentStreamEnum;
    /**
     * The product URI to rent the On Demand video.
     */
    uri: string;
}
/**
 * Information about where and how to report a video.
 */
export declare class OnDemandPageVideoMetadataInteractionsReport extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataInteractionsSubscribe extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataInteractionsWatched extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
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
export declare class OnDemandPageVideoMetadataInteractions extends SpeakeasyBase {
    /**
     * The Buy interaction for a On Demand video.
     */
    buy: OnDemandPageVideoMetadataInteractionsBuy;
    /**
     * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
     */
    channel: OnDemandPageVideoMetadataInteractionsChannel;
    /**
     * Information about whether the authenticated user has liked this video.
     */
    like: OnDemandPageVideoMetadataInteractionsLike;
    /**
     * The Rent interaction for an On Demand video.
     */
    rent: OnDemandPageVideoMetadataInteractionsRent;
    /**
     * Information about where and how to report a video.
     */
    report: OnDemandPageVideoMetadataInteractionsReport;
    /**
     * Subscription information for an On Demand video.
     */
    subscribe?: OnDemandPageVideoMetadataInteractionsSubscribe;
    /**
     * Information about removing this video from the user's list of watched videos.
     */
    watched: OnDemandPageVideoMetadataInteractionsWatched;
    /**
     * Information about whether this video appears on the authenticated user's Watch Later list.
     */
    watchlater: OnDemandPageVideoMetadataInteractionsWatchlater;
}
/**
 * The video's metadata.
 */
export declare class OnDemandPageVideoMetadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the video.
     */
    connections: OnDemandPageVideoMetadataConnections;
    /**
     * A list of resource URIs related to the video.
     */
    interactions: OnDemandPageVideoMetadataInteractions;
}
/**
 * A standard connection object indicating how to get all the videos in this project.
 */
export declare class OnDemandPageVideoProjectMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class OnDemandPageVideoProjectMetadataConnections extends SpeakeasyBase {
    /**
     * A standard connection object indicating how to get all the videos in this project.
     */
    videos: OnDemandPageVideoProjectMetadataConnectionsVideos;
}
/**
 * The project's metadata.
 */
export declare class OnDemandPageVideoProjectMetadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the project.
     */
    connections: OnDemandPageVideoProjectMetadataConnections;
}
/**
 * Information about the folder that contains this video.
 */
export declare class OnDemandPageVideoProject extends SpeakeasyBase {
    /**
     * The time in ISO 8601 format when the project was created.
     */
    createdTime: string;
    /**
     * The project's metadata.
     */
    metadata: OnDemandPageVideoProjectMetadata;
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
export declare enum OnDemandPageVideoPrivacyCommentsEnum {
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
export declare enum OnDemandPageVideoPrivacyEmbedEnum {
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
export declare enum OnDemandPageVideoPrivacyViewEnum {
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
export declare class OnDemandPageVideoPrivacy extends SpeakeasyBase {
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
    comments: OnDemandPageVideoPrivacyCommentsEnum;
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
    embed: OnDemandPageVideoPrivacyEmbedEnum;
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
    view: OnDemandPageVideoPrivacyViewEnum;
}
export declare class OnDemandPageVideoSpatialDirectorTimeline extends SpeakeasyBase {
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
export declare enum OnDemandPageVideoSpatialProjectionEnum {
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
export declare enum OnDemandPageVideoSpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
/**
 * 360 spatial data.
 */
export declare class OnDemandPageVideoSpatial extends SpeakeasyBase {
    /**
     * 360 director timeline.
     */
    directorTimeline: OnDemandPageVideoSpatialDirectorTimeline[];
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
    projection: OnDemandPageVideoSpatialProjectionEnum;
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
    stereoFormat: OnDemandPageVideoSpatialStereoFormatEnum;
}
/**
 * A collection of stats associated with this video.
 */
export declare class OnDemandPageVideoStats extends SpeakeasyBase {
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
export declare enum OnDemandPageVideoStatusEnum {
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
export declare enum OnDemandPageVideoTranscodeStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The transcode information for a video upload.
 */
export declare class OnDemandPageVideoTranscode extends SpeakeasyBase {
    /**
     * Status code for this video's availability.
     */
    status?: OnDemandPageVideoTranscodeStatusEnum;
}
/**
 * The approach for uploading the video.
 */
export declare enum OnDemandPageVideoUploadApproachEnum {
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
export declare enum OnDemandPageVideoUploadStatusEnum {
    Complete = "complete",
    Error = "error",
    InProgress = "in_progress"
}
/**
 * The upload information for this video.
 */
export declare class OnDemandPageVideoUpload extends SpeakeasyBase {
    /**
     * The approach for uploading the video.
     */
    approach?: OnDemandPageVideoUploadApproachEnum;
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
    status: OnDemandPageVideoUploadStatusEnum;
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
export declare enum OnDemandPageVideoUserAccountEnum {
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
export declare enum OnDemandPageVideoUserContentFilterEnum {
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
export declare class OnDemandPageVideoUserMetadataConnectionsAlbums extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsAppearances extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsBlock extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsCategories extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsChannels extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsFeed extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsFolders extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsFollowers extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsFollowing extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsGroups extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsLikes extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsPictures extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsPortfolios extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsShared extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnectionsWatchlater extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the albums created by this user.
     */
    albums: OnDemandPageVideoUserMetadataConnectionsAlbums;
    /**
     * Information about the appearances of this user in other videos.
     */
    appearances: OnDemandPageVideoUserMetadataConnectionsAppearances;
    /**
     * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
     */
    block: OnDemandPageVideoUserMetadataConnectionsBlock;
    /**
     * Information about this user's followed categories.
     */
    categories: OnDemandPageVideoUserMetadataConnectionsCategories;
    /**
     * Information about this user's subscribed channels.
     */
    channels: OnDemandPageVideoUserMetadataConnectionsChannels;
    /**
     * Information about this user's feed.
     */
    feed: OnDemandPageVideoUserMetadataConnectionsFeed;
    /**
     * Information about this user's folders.
     */
    folders: OnDemandPageVideoUserMetadataConnectionsFolders;
    /**
     * Information about the user's followers.
     */
    followers: OnDemandPageVideoUserMetadataConnectionsFollowers;
    /**
     * Information about the users that the current user is following.
     */
    following: OnDemandPageVideoUserMetadataConnectionsFollowing;
    /**
     * Information about the groups created by this user.
     */
    groups: OnDemandPageVideoUserMetadataConnectionsGroups;
    /**
     * Information about the videos that this user has liked.
     */
    likes: OnDemandPageVideoUserMetadataConnectionsLikes;
    /**
     * Information about the channels that this user moderates.
     */
    moderatedChannels: OnDemandPageVideoUserMetadataConnectionsModeratedChannels;
    /**
     * Information about this user's portraits.
     */
    pictures: OnDemandPageVideoUserMetadataConnectionsPictures;
    /**
     * Information about this user's portfolios.
     */
    portfolios: OnDemandPageVideoUserMetadataConnectionsPortfolios;
    /**
     * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedChannels: OnDemandPageVideoUserMetadataConnectionsRecommendedChannels;
    /**
     * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedUsers: OnDemandPageVideoUserMetadataConnectionsRecommendedUsers;
    /**
     * Information about the videos that have been shared with this user.
     */
    shared: OnDemandPageVideoUserMetadataConnectionsShared;
    /**
     * Information about the videos uploaded by this user.
     */
    videos: OnDemandPageVideoUserMetadataConnectionsVideos;
    /**
     * Information about the videos that this user has watched.
     */
    watchedVideos: OnDemandPageVideoUserMetadataConnectionsWatchedVideos;
    /**
     * Information about the videos that this user wants to watch later.
     */
    watchlater: OnDemandPageVideoUserMetadataConnectionsWatchlater;
}
export declare class OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataInteractionsBlock extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataInteractionsFollow extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataInteractionsReport extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser;
    /**
     * Information related to the block status of this user.
     */
    block: OnDemandPageVideoUserMetadataInteractionsBlock;
    /**
     * Information related to the followed status of this user.
     */
    follow: OnDemandPageVideoUserMetadataInteractionsFollow;
    /**
     * Information regarding where and how to report a user.
     */
    report: OnDemandPageVideoUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
 */
export declare class OnDemandPageVideoUserMetadata extends SpeakeasyBase {
    /**
     * The list of resource URIs related to the user.
     */
    connections: OnDemandPageVideoUserMetadataConnections;
    interactions: OnDemandPageVideoUserMetadataInteractions;
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
export declare enum OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum {
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
export declare enum OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum {
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
export declare enum OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class OnDemandPageVideoUserPreferencesVideosPrivacy extends SpeakeasyBase {
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
    comments?: OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum;
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
    embed?: OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum;
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
    view?: OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum;
}
export declare class OnDemandPageVideoUserPreferencesVideos extends SpeakeasyBase {
    privacy?: OnDemandPageVideoUserPreferencesVideosPrivacy;
}
export declare class OnDemandPageVideoUserPreferences extends SpeakeasyBase {
    videos?: OnDemandPageVideoUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
 */
export declare class OnDemandPageVideoUserUploadQuotaLifetime extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUserUploadQuotaPeriodic extends SpeakeasyBase {
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
export declare enum OnDemandPageVideoUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
 */
export declare class OnDemandPageVideoUserUploadQuotaSpace extends SpeakeasyBase {
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
    showing: OnDemandPageVideoUserUploadQuotaSpaceShowingEnum;
    /**
     * The number of bytes that you've already uploaded against your quota.
     */
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
 */
export declare class OnDemandPageVideoUserUploadQuota extends SpeakeasyBase {
    /**
     * Information about the user's lifetime upload usage.
     */
    lifetime: OnDemandPageVideoUserUploadQuotaLifetime;
    /**
     * Information about the user's usage for the current period.
     */
    periodic: OnDemandPageVideoUserUploadQuotaPeriodic;
    /**
     * Information about the user's upload space remaining for the current period.
     */
    space: OnDemandPageVideoUserUploadQuotaSpace;
}
export declare class OnDemandPageVideoUserWebsites extends SpeakeasyBase {
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
export declare class OnDemandPageVideoUser extends SpeakeasyBase {
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
    account: OnDemandPageVideoUserAccountEnum;
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
    contentFilter?: OnDemandPageVideoUserContentFilterEnum;
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
    metadata: OnDemandPageVideoUserMetadata;
    /**
     * The user's display name.
     */
    name: string;
    /**
     * The active portrait of this user.
     */
    pictures: Picture;
    preferences?: OnDemandPageVideoUserPreferences;
    /**
     * The user's resource key string.
     */
    resourceKey: string;
    /**
     * Appears only when the user has upload access and is looking at their own user record.
     */
    uploadQuota: OnDemandPageVideoUserUploadQuota;
    /**
     * The user's canonical relative URI.
     */
    uri: string;
    /**
     * The user's websites.
     */
    websites: OnDemandPageVideoUserWebsites[];
}
/**
 * The trailer for this On Demand page.
 */
export declare class OnDemandPageVideo extends SpeakeasyBase {
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
    context: OnDemandPageVideoContext;
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
    license: OnDemandPageVideoLicenseEnum;
    /**
     * The link to the video.
     */
    link: string;
    /**
     * The video's metadata.
     */
    metadata: OnDemandPageVideoMetadata;
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
    parentFolder?: OnDemandPageVideoProject;
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
    privacy: OnDemandPageVideoPrivacy;
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
    spatial: OnDemandPageVideoSpatial;
    /**
     * A collection of stats associated with this video.
     */
    stats: OnDemandPageVideoStats;
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
    status: OnDemandPageVideoStatusEnum;
    /**
     * An array of all tags assigned to this video.
     */
    tags: Tag[];
    /**
     * The transcode information for a video upload.
     */
    transcode: OnDemandPageVideoTranscode;
    /**
     * The upload information for this video.
     */
    upload: OnDemandPageVideoUpload;
    /**
     * The video's canonical relative URI.
     */
    uri: string;
    /**
     * The video owner.
     */
    user: OnDemandPageVideoUser;
    /**
     * The video's width in pixels.
     */
    width: number;
}
/**
 * Whether this On Demand page is for a film or a series.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `film` - The On Demand page is for a film.
 *  * `series` - The On Demand page is for a series.
 *
 */
export declare enum OnDemandPageTypeEnum {
    Film = "film",
    Series = "series"
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
export declare enum OnDemandPageUserAccountEnum {
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
export declare enum OnDemandPageUserContentFilterEnum {
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
export declare class OnDemandPageUserMetadataConnectionsAlbums extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsAppearances extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsBlock extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsCategories extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsChannels extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsFeed extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsFolders extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsFollowers extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsFollowing extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsGroups extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsLikes extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsPictures extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsPortfolios extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsShared extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnectionsWatchlater extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the albums created by this user.
     */
    albums: OnDemandPageUserMetadataConnectionsAlbums;
    /**
     * Information about the appearances of this user in other videos.
     */
    appearances: OnDemandPageUserMetadataConnectionsAppearances;
    /**
     * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
     */
    block: OnDemandPageUserMetadataConnectionsBlock;
    /**
     * Information about this user's followed categories.
     */
    categories: OnDemandPageUserMetadataConnectionsCategories;
    /**
     * Information about this user's subscribed channels.
     */
    channels: OnDemandPageUserMetadataConnectionsChannels;
    /**
     * Information about this user's feed.
     */
    feed: OnDemandPageUserMetadataConnectionsFeed;
    /**
     * Information about this user's folders.
     */
    folders: OnDemandPageUserMetadataConnectionsFolders;
    /**
     * Information about the user's followers.
     */
    followers: OnDemandPageUserMetadataConnectionsFollowers;
    /**
     * Information about the users that the current user is following.
     */
    following: OnDemandPageUserMetadataConnectionsFollowing;
    /**
     * Information about the groups created by this user.
     */
    groups: OnDemandPageUserMetadataConnectionsGroups;
    /**
     * Information about the videos that this user has liked.
     */
    likes: OnDemandPageUserMetadataConnectionsLikes;
    /**
     * Information about the channels that this user moderates.
     */
    moderatedChannels: OnDemandPageUserMetadataConnectionsModeratedChannels;
    /**
     * Information about this user's portraits.
     */
    pictures: OnDemandPageUserMetadataConnectionsPictures;
    /**
     * Information about this user's portfolios.
     */
    portfolios: OnDemandPageUserMetadataConnectionsPortfolios;
    /**
     * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedChannels: OnDemandPageUserMetadataConnectionsRecommendedChannels;
    /**
     * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedUsers: OnDemandPageUserMetadataConnectionsRecommendedUsers;
    /**
     * Information about the videos that have been shared with this user.
     */
    shared: OnDemandPageUserMetadataConnectionsShared;
    /**
     * Information about the videos uploaded by this user.
     */
    videos: OnDemandPageUserMetadataConnectionsVideos;
    /**
     * Information about the videos that this user has watched.
     */
    watchedVideos: OnDemandPageUserMetadataConnectionsWatchedVideos;
    /**
     * Information about the videos that this user wants to watch later.
     */
    watchlater: OnDemandPageUserMetadataConnectionsWatchlater;
}
export declare class OnDemandPageUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataInteractionsBlock extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataInteractionsFollow extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataInteractionsReport extends SpeakeasyBase {
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
export declare class OnDemandPageUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: OnDemandPageUserMetadataInteractionsAddPrivacyUser;
    /**
     * Information related to the block status of this user.
     */
    block: OnDemandPageUserMetadataInteractionsBlock;
    /**
     * Information related to the followed status of this user.
     */
    follow: OnDemandPageUserMetadataInteractionsFollow;
    /**
     * Information regarding where and how to report a user.
     */
    report: OnDemandPageUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
 */
export declare class OnDemandPageUserMetadata extends SpeakeasyBase {
    /**
     * The list of resource URIs related to the user.
     */
    connections: OnDemandPageUserMetadataConnections;
    interactions: OnDemandPageUserMetadataInteractions;
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
export declare enum OnDemandPageUserPreferencesVideosPrivacyCommentsEnum {
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
export declare enum OnDemandPageUserPreferencesVideosPrivacyEmbedEnum {
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
export declare enum OnDemandPageUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class OnDemandPageUserPreferencesVideosPrivacy extends SpeakeasyBase {
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
    comments?: OnDemandPageUserPreferencesVideosPrivacyCommentsEnum;
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
    embed?: OnDemandPageUserPreferencesVideosPrivacyEmbedEnum;
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
    view?: OnDemandPageUserPreferencesVideosPrivacyViewEnum;
}
export declare class OnDemandPageUserPreferencesVideos extends SpeakeasyBase {
    privacy?: OnDemandPageUserPreferencesVideosPrivacy;
}
export declare class OnDemandPageUserPreferences extends SpeakeasyBase {
    videos?: OnDemandPageUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
 */
export declare class OnDemandPageUserUploadQuotaLifetime extends SpeakeasyBase {
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
export declare class OnDemandPageUserUploadQuotaPeriodic extends SpeakeasyBase {
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
export declare enum OnDemandPageUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
 */
export declare class OnDemandPageUserUploadQuotaSpace extends SpeakeasyBase {
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
    showing: OnDemandPageUserUploadQuotaSpaceShowingEnum;
    /**
     * The number of bytes that you've already uploaded against your quota.
     */
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
 */
export declare class OnDemandPageUserUploadQuota extends SpeakeasyBase {
    /**
     * Information about the user's lifetime upload usage.
     */
    lifetime: OnDemandPageUserUploadQuotaLifetime;
    /**
     * Information about the user's usage for the current period.
     */
    periodic: OnDemandPageUserUploadQuotaPeriodic;
    /**
     * Information about the user's upload space remaining for the current period.
     */
    space: OnDemandPageUserUploadQuotaSpace;
}
export declare class OnDemandPageUserWebsites extends SpeakeasyBase {
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
 * The user who created this On Demand page.
 */
export declare class OnDemandPageUser extends SpeakeasyBase {
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
    account: OnDemandPageUserAccountEnum;
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
    contentFilter?: OnDemandPageUserContentFilterEnum;
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
    metadata: OnDemandPageUserMetadata;
    /**
     * The user's display name.
     */
    name: string;
    /**
     * The active portrait of this user.
     */
    pictures: Picture;
    preferences?: OnDemandPageUserPreferences;
    /**
     * The user's resource key string.
     */
    resourceKey: string;
    /**
     * Appears only when the user has upload access and is looking at their own user record.
     */
    uploadQuota: OnDemandPageUserUploadQuota;
    /**
     * The user's canonical relative URI.
     */
    uri: string;
    /**
     * The user's websites.
     */
    websites: OnDemandPageUserWebsites[];
}
/**
 * The On Demand page was created.
 */
export declare class OnDemandPage extends SpeakeasyBase {
    /**
     * The background image for the On Demand page on Vimeo.
     */
    background: OnDemandPagePicture;
    /**
     * The primary and secondary colors used for rendering this On Demand page.
     */
    colors: OnDemandPageColors;
    /**
     * An array of the page's content ratings.
     */
    contentRating: string[];
    /**
     * The time in ISO 8601 format when the page was created.
     */
    createdTime?: string;
    /**
     * The description of this On Demand page.
     */
    description: string;
    /**
     * The link to this page on its own domain.
     */
    domainLink: string;
    /**
     * Information about this On Demand page's episodes, if the page is for a series.
     */
    episodes: OnDemandPageEpisodes;
    /**
     * This On Demand page's film, if it is a film.
     */
    film?: Video;
    /**
     * All the genres assigned to this page.
     */
    genres: OnDemandGenre[];
    /**
     * The link to the page on Vimeo.
     */
    link: string;
    /**
     * Metadata about the On Demand page.
     */
    metadata: OnDemandPageMetadata;
    /**
     * he time in ISO 8601 format when the page was last modified.
     */
    modifiedTime?: string;
    /**
     * A descriptive title of this On Demand page.
     */
    name: string;
    /**
     * The active poster for this On Demand page.
     */
    pictures: OnDemandPagePicture;
    preorder: OnDemandPagePreorder;
    published: OnDemandPagePublished;
    /**
     * The rating of this page.
     */
    rating: number;
    /**
     * The VOD resource key.
     */
    resourceKey: string;
    /**
     * The creator-designated SKU for this On Demand page.
     */
    sku?: string;
    /**
     * Information about subscribing to this On Demand page, if enabled.
     */
    subscription: OnDemandPageSubscription;
    /**
     * The graphical theme for this On Demand page.
     */
    theme: string;
    /**
     * The thumbnail image for the On Demand page on Vimeo.
     */
    thumbnail: OnDemandPagePicture;
    /**
     * The trailer for this On Demand page.
     */
    trailer: OnDemandPageVideo;
    /**
     * Whether this On Demand page is for a film or a series.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `film` - The On Demand page is for a film.
     *  * `series` - The On Demand page is for a series.
     *
     */
    type: OnDemandPageTypeEnum;
    /**
     * The relative URI of the On Demand page.
     */
    uri: string;
    /**
     * The user who created this On Demand page.
     */
    user: OnDemandPageUser;
}

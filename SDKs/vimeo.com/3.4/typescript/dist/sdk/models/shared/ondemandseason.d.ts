import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * The Videos connection.
 */
export declare class OnDemandSeasonMetadataConnectionsVideos extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of videos on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection ∂data.
     */
    uri: string;
}
export declare class OnDemandSeasonMetadataConnections extends SpeakeasyBase {
    /**
     * The Videos connection.
     */
    videos: OnDemandSeasonMetadataConnectionsVideos;
}
export declare class OnDemandSeasonMetadata extends SpeakeasyBase {
    connections: OnDemandSeasonMetadataConnections;
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
export declare enum OnDemandSeasonUserAccountEnum {
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
export declare enum OnDemandSeasonUserContentFilterEnum {
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
export declare class OnDemandSeasonUserMetadataConnectionsAlbums extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsAppearances extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsBlock extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsCategories extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsChannels extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsFeed extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsFolders extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsFollowers extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsFollowing extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsGroups extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsLikes extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsPictures extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsPortfolios extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsShared extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnectionsWatchlater extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the albums created by this user.
     */
    albums: OnDemandSeasonUserMetadataConnectionsAlbums;
    /**
     * Information about the appearances of this user in other videos.
     */
    appearances: OnDemandSeasonUserMetadataConnectionsAppearances;
    /**
     * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
     */
    block: OnDemandSeasonUserMetadataConnectionsBlock;
    /**
     * Information about this user's followed categories.
     */
    categories: OnDemandSeasonUserMetadataConnectionsCategories;
    /**
     * Information about this user's subscribed channels.
     */
    channels: OnDemandSeasonUserMetadataConnectionsChannels;
    /**
     * Information about this user's feed.
     */
    feed: OnDemandSeasonUserMetadataConnectionsFeed;
    /**
     * Information about this user's folders.
     */
    folders: OnDemandSeasonUserMetadataConnectionsFolders;
    /**
     * Information about the user's followers.
     */
    followers: OnDemandSeasonUserMetadataConnectionsFollowers;
    /**
     * Information about the users that the current user is following.
     */
    following: OnDemandSeasonUserMetadataConnectionsFollowing;
    /**
     * Information about the groups created by this user.
     */
    groups: OnDemandSeasonUserMetadataConnectionsGroups;
    /**
     * Information about the videos that this user has liked.
     */
    likes: OnDemandSeasonUserMetadataConnectionsLikes;
    /**
     * Information about the channels that this user moderates.
     */
    moderatedChannels: OnDemandSeasonUserMetadataConnectionsModeratedChannels;
    /**
     * Information about this user's portraits.
     */
    pictures: OnDemandSeasonUserMetadataConnectionsPictures;
    /**
     * Information about this user's portfolios.
     */
    portfolios: OnDemandSeasonUserMetadataConnectionsPortfolios;
    /**
     * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedChannels: OnDemandSeasonUserMetadataConnectionsRecommendedChannels;
    /**
     * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedUsers: OnDemandSeasonUserMetadataConnectionsRecommendedUsers;
    /**
     * Information about the videos that have been shared with this user.
     */
    shared: OnDemandSeasonUserMetadataConnectionsShared;
    /**
     * Information about the videos uploaded by this user.
     */
    videos: OnDemandSeasonUserMetadataConnectionsVideos;
    /**
     * Information about the videos that this user has watched.
     */
    watchedVideos: OnDemandSeasonUserMetadataConnectionsWatchedVideos;
    /**
     * Information about the videos that this user wants to watch later.
     */
    watchlater: OnDemandSeasonUserMetadataConnectionsWatchlater;
}
export declare class OnDemandSeasonUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataInteractionsBlock extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataInteractionsFollow extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataInteractionsReport extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: OnDemandSeasonUserMetadataInteractionsAddPrivacyUser;
    /**
     * Information related to the block status of this user.
     */
    block: OnDemandSeasonUserMetadataInteractionsBlock;
    /**
     * Information related to the followed status of this user.
     */
    follow: OnDemandSeasonUserMetadataInteractionsFollow;
    /**
     * Information regarding where and how to report a user.
     */
    report: OnDemandSeasonUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
 */
export declare class OnDemandSeasonUserMetadata extends SpeakeasyBase {
    /**
     * The list of resource URIs related to the user.
     */
    connections: OnDemandSeasonUserMetadataConnections;
    interactions: OnDemandSeasonUserMetadataInteractions;
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
export declare enum OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum {
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
export declare enum OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum {
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
export declare enum OnDemandSeasonUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class OnDemandSeasonUserPreferencesVideosPrivacy extends SpeakeasyBase {
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
    comments?: OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum;
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
    embed?: OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum;
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
    view?: OnDemandSeasonUserPreferencesVideosPrivacyViewEnum;
}
export declare class OnDemandSeasonUserPreferencesVideos extends SpeakeasyBase {
    privacy?: OnDemandSeasonUserPreferencesVideosPrivacy;
}
export declare class OnDemandSeasonUserPreferences extends SpeakeasyBase {
    videos?: OnDemandSeasonUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
 */
export declare class OnDemandSeasonUserUploadQuotaLifetime extends SpeakeasyBase {
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
export declare class OnDemandSeasonUserUploadQuotaPeriodic extends SpeakeasyBase {
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
export declare enum OnDemandSeasonUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
 */
export declare class OnDemandSeasonUserUploadQuotaSpace extends SpeakeasyBase {
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
    showing: OnDemandSeasonUserUploadQuotaSpaceShowingEnum;
    /**
     * The number of bytes that you've already uploaded against your quota.
     */
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
 */
export declare class OnDemandSeasonUserUploadQuota extends SpeakeasyBase {
    /**
     * Information about the user's lifetime upload usage.
     */
    lifetime: OnDemandSeasonUserUploadQuotaLifetime;
    /**
     * Information about the user's usage for the current period.
     */
    periodic: OnDemandSeasonUserUploadQuotaPeriodic;
    /**
     * Information about the user's upload space remaining for the current period.
     */
    space: OnDemandSeasonUserUploadQuotaSpace;
}
export declare class OnDemandSeasonUserWebsites extends SpeakeasyBase {
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
 * The creator of this On Demand page.
 */
export declare class OnDemandSeasonUser extends SpeakeasyBase {
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
    account: OnDemandSeasonUserAccountEnum;
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
    contentFilter?: OnDemandSeasonUserContentFilterEnum;
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
    metadata: OnDemandSeasonUserMetadata;
    /**
     * The user's display name.
     */
    name: string;
    /**
     * The active portrait of this user.
     */
    pictures: Picture;
    preferences?: OnDemandSeasonUserPreferences;
    /**
     * The user's resource key string.
     */
    resourceKey: string;
    /**
     * Appears only when the user has upload access and is looking at their own user record.
     */
    uploadQuota: OnDemandSeasonUserUploadQuota;
    /**
     * The user's canonical relative URI.
     */
    uri: string;
    /**
     * The user's websites.
     */
    websites: OnDemandSeasonUserWebsites[];
}
/**
 * The season was returned.
 */
export declare class OnDemandSeason extends SpeakeasyBase {
    /**
     * The description for this season.
     */
    description: string;
    metadata: OnDemandSeasonMetadata;
    /**
     * The descriptive name of the season.
     */
    name: string;
    /**
     * The position of the season relative to other seasons in the series.
     */
    position: number;
    /**
     * The unique identifier for this On Demand season.
     */
    resourceKey: string;
    /**
     * The type of season.
     */
    type: string;
    /**
     * The season container's relative URI.
     */
    uri: string;
    /**
     * The creator of this On Demand page.
     */
    user: OnDemandSeasonUser;
}

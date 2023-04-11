import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * Information about this comment's replies.
 */
export declare class CommentMetadataConnectionsReplies extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of replies on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
export declare class CommentMetadataConnections extends SpeakeasyBase {
    /**
     * Information about this comment's replies.
     */
    replies: CommentMetadataConnectionsReplies;
}
export declare class CommentMetadata extends SpeakeasyBase {
    connections: CommentMetadataConnections;
}
/**
 * The Vimeo content to which the comment relates:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `video` - The comment is about a video.
 *
 */
export declare enum CommentTypeEnum {
    Video = "video"
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
export declare enum CommentUserAccountEnum {
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
export declare enum CommentUserContentFilterEnum {
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
export declare class CommentUserMetadataConnectionsAlbums extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsAppearances extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsBlock extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsCategories extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsChannels extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsFeed extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsFolders extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsFollowers extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsFollowing extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsGroups extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsLikes extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsPictures extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsPortfolios extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsShared extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnectionsWatchlater extends SpeakeasyBase {
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
export declare class CommentUserMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the albums created by this user.
     */
    albums: CommentUserMetadataConnectionsAlbums;
    /**
     * Information about the appearances of this user in other videos.
     */
    appearances: CommentUserMetadataConnectionsAppearances;
    /**
     * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
     */
    block: CommentUserMetadataConnectionsBlock;
    /**
     * Information about this user's followed categories.
     */
    categories: CommentUserMetadataConnectionsCategories;
    /**
     * Information about this user's subscribed channels.
     */
    channels: CommentUserMetadataConnectionsChannels;
    /**
     * Information about this user's feed.
     */
    feed: CommentUserMetadataConnectionsFeed;
    /**
     * Information about this user's folders.
     */
    folders: CommentUserMetadataConnectionsFolders;
    /**
     * Information about the user's followers.
     */
    followers: CommentUserMetadataConnectionsFollowers;
    /**
     * Information about the users that the current user is following.
     */
    following: CommentUserMetadataConnectionsFollowing;
    /**
     * Information about the groups created by this user.
     */
    groups: CommentUserMetadataConnectionsGroups;
    /**
     * Information about the videos that this user has liked.
     */
    likes: CommentUserMetadataConnectionsLikes;
    /**
     * Information about the channels that this user moderates.
     */
    moderatedChannels: CommentUserMetadataConnectionsModeratedChannels;
    /**
     * Information about this user's portraits.
     */
    pictures: CommentUserMetadataConnectionsPictures;
    /**
     * Information about this user's portfolios.
     */
    portfolios: CommentUserMetadataConnectionsPortfolios;
    /**
     * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedChannels: CommentUserMetadataConnectionsRecommendedChannels;
    /**
     * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedUsers: CommentUserMetadataConnectionsRecommendedUsers;
    /**
     * Information about the videos that have been shared with this user.
     */
    shared: CommentUserMetadataConnectionsShared;
    /**
     * Information about the videos uploaded by this user.
     */
    videos: CommentUserMetadataConnectionsVideos;
    /**
     * Information about the videos that this user has watched.
     */
    watchedVideos: CommentUserMetadataConnectionsWatchedVideos;
    /**
     * Information about the videos that this user wants to watch later.
     */
    watchlater: CommentUserMetadataConnectionsWatchlater;
}
export declare class CommentUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
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
export declare class CommentUserMetadataInteractionsBlock extends SpeakeasyBase {
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
export declare class CommentUserMetadataInteractionsFollow extends SpeakeasyBase {
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
export declare class CommentUserMetadataInteractionsReport extends SpeakeasyBase {
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
export declare class CommentUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: CommentUserMetadataInteractionsAddPrivacyUser;
    /**
     * Information related to the block status of this user.
     */
    block: CommentUserMetadataInteractionsBlock;
    /**
     * Information related to the followed status of this user.
     */
    follow: CommentUserMetadataInteractionsFollow;
    /**
     * Information regarding where and how to report a user.
     */
    report: CommentUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
 */
export declare class CommentUserMetadata extends SpeakeasyBase {
    /**
     * The list of resource URIs related to the user.
     */
    connections: CommentUserMetadataConnections;
    interactions: CommentUserMetadataInteractions;
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
export declare enum CommentUserPreferencesVideosPrivacyCommentsEnum {
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
export declare enum CommentUserPreferencesVideosPrivacyEmbedEnum {
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
export declare enum CommentUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class CommentUserPreferencesVideosPrivacy extends SpeakeasyBase {
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
    comments?: CommentUserPreferencesVideosPrivacyCommentsEnum;
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
    embed?: CommentUserPreferencesVideosPrivacyEmbedEnum;
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
    view?: CommentUserPreferencesVideosPrivacyViewEnum;
}
export declare class CommentUserPreferencesVideos extends SpeakeasyBase {
    privacy?: CommentUserPreferencesVideosPrivacy;
}
export declare class CommentUserPreferences extends SpeakeasyBase {
    videos?: CommentUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
 */
export declare class CommentUserUploadQuotaLifetime extends SpeakeasyBase {
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
export declare class CommentUserUploadQuotaPeriodic extends SpeakeasyBase {
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
export declare enum CommentUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
 */
export declare class CommentUserUploadQuotaSpace extends SpeakeasyBase {
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
    showing: CommentUserUploadQuotaSpaceShowingEnum;
    /**
     * The number of bytes that you've already uploaded against your quota.
     */
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
 */
export declare class CommentUserUploadQuota extends SpeakeasyBase {
    /**
     * Information about the user's lifetime upload usage.
     */
    lifetime: CommentUserUploadQuotaLifetime;
    /**
     * Information about the user's usage for the current period.
     */
    periodic: CommentUserUploadQuotaPeriodic;
    /**
     * Information about the user's upload space remaining for the current period.
     */
    space: CommentUserUploadQuotaSpace;
}
export declare class CommentUserWebsites extends SpeakeasyBase {
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
 * The user who posted the comment.
 */
export declare class CommentUser extends SpeakeasyBase {
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
    account: CommentUserAccountEnum;
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
    contentFilter?: CommentUserContentFilterEnum;
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
    metadata: CommentUserMetadata;
    /**
     * The user's display name.
     */
    name: string;
    /**
     * The active portrait of this user.
     */
    pictures: Picture;
    preferences?: CommentUserPreferences;
    /**
     * The user's resource key string.
     */
    resourceKey: string;
    /**
     * Appears only when the user has upload access and is looking at their own user record.
     */
    uploadQuota: CommentUserUploadQuota;
    /**
     * The user's canonical relative URI.
     */
    uri: string;
    /**
     * The user's websites.
     */
    websites: CommentUserWebsites[];
}
/**
 * The comment was added.
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * The time in ISO 8601 format when the comment was posted.
     */
    createdOn: string;
    metadata: CommentMetadata;
    /**
     * The resource key string for the comment.
     */
    resourceKey: string;
    /**
     * The content of the comment.
     */
    text: string;
    /**
     * The Vimeo content to which the comment relates:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `video` - The comment is about a video.
     *
     */
    type: CommentTypeEnum;
    /**
     * The unique identifier to access the comment resource.
     */
    uri: string;
    /**
     * The user who posted the comment.
     */
    user: CommentUser;
}

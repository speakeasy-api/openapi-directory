import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * Information about the members or moderators of this group.
 */
export declare class GroupMetadataConnectionsUsers extends SpeakeasyBase {
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
 * Information about the videos contained within this group.
 */
export declare class GroupMetadataConnectionsVideos extends SpeakeasyBase {
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
 * A collection of information that is connected to this resource.
 */
export declare class GroupMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the members or moderators of this group.
     */
    users: GroupMetadataConnectionsUsers;
    /**
     * Information about the videos contained within this group.
     */
    videos: GroupMetadataConnectionsVideos;
}
/**
 * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `member` - The authenticated user is a member.
 *  * `moderator` - The authenticated user is a moderator.
 *
 */
export declare enum GroupMetadataInteractionsJoinTypeEnum {
    Member = "member",
    Moderator = "moderator"
}
/**
 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
 */
export declare class GroupMetadataInteractionsJoin extends SpeakeasyBase {
    /**
     * Whether the authenticated user has followed this group. This data requires a bearer token with the `private` scope.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format when the user joined this group. This data requires a bearer token with the `private` scope.
     */
    addedTime: string;
    /**
     * The user's title, or the null value if not applicable. This data requires a bearer token with the `private` scope.
     */
    title: string;
    /**
     * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `member` - The authenticated user is a member.
     *  * `moderator` - The authenticated user is a moderator.
     *
     */
    type: GroupMetadataInteractionsJoinTypeEnum;
    /**
     * The URI for following. PUT to this URI to follow, or DELETE to this URI to unfollow. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * User actions that have involved the group. This data requires a bearer token with the `private` scope.
 */
export declare class GroupMetadataInteractions extends SpeakeasyBase {
    /**
     * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
     */
    join: GroupMetadataInteractionsJoin;
}
/**
 * Metadata about the group.
 */
export declare class GroupMetadata extends SpeakeasyBase {
    /**
     * A collection of information that is connected to this resource.
     */
    connections: GroupMetadataConnections;
    /**
     * User actions that have involved the group. This data requires a bearer token with the `private` scope.
     */
    interactions: GroupMetadataInteractions;
}
/**
 * Who can comment on the group:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `all` - Anyone can comment on the group.
 *  * `members` - Only members can comment on the group.
 *
 */
export declare enum GroupPrivacyCommentEnum {
    All = "all",
    Members = "members"
}
/**
 * Who can invite new members to the group:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `all` - Anyone can invite new members to join.
 *  * `members` - Only group members can invite new members to join.
 *
 */
export declare enum GroupPrivacyInviteEnum {
    All = "all",
    Members = "members"
}
/**
 * Who can join the group:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can join the group.
 *  * `members` - Only people with a Vimeo account can join the group.
 *
 */
export declare enum GroupPrivacyJoinEnum {
    Anybody = "anybody",
    Members = "members"
}
/**
 * Who can add videos to the group:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `all` - Anyone can add videos to the group.
 *  * `members` - Only group members can add videos to the group.
 *
 */
export declare enum GroupPrivacyVideosEnum {
    All = "all",
    Members = "members"
}
/**
 * Who can view the group:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can view the group.
 *  * `members` - Only group members can view the group.
 *
 */
export declare enum GroupPrivacyViewEnum {
    Anybody = "anybody",
    Members = "members"
}
/**
 * The group's privacy settings.
 */
export declare class GroupPrivacy extends SpeakeasyBase {
    /**
     * Who can comment on the group:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `all` - Anyone can comment on the group.
     *  * `members` - Only members can comment on the group.
     *
     */
    comment: GroupPrivacyCommentEnum;
    /**
     * Who can invite new members to the group:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `all` - Anyone can invite new members to join.
     *  * `members` - Only group members can invite new members to join.
     *
     */
    invite: GroupPrivacyInviteEnum;
    /**
     * Who can join the group:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can join the group.
     *  * `members` - Only people with a Vimeo account can join the group.
     *
     */
    join: GroupPrivacyJoinEnum;
    /**
     * Who can add videos to the group:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `all` - Anyone can add videos to the group.
     *  * `members` - Only group members can add videos to the group.
     *
     */
    videos: GroupPrivacyVideosEnum;
    /**
     * Who can view the group:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can view the group.
     *  * `members` - Only group members can view the group.
     *
     */
    view: GroupPrivacyViewEnum;
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
export declare enum GroupUserAccountEnum {
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
export declare enum GroupUserContentFilterEnum {
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
export declare class GroupUserMetadataConnectionsAlbums extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsAppearances extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsBlock extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsCategories extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsChannels extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsFeed extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsFolders extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsFollowers extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsFollowing extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsGroups extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsLikes extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsModeratedChannels extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsPictures extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsPortfolios extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsRecommendedChannels extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsRecommendedUsers extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsShared extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsWatchedVideos extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnectionsWatchlater extends SpeakeasyBase {
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
export declare class GroupUserMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the albums created by this user.
     */
    albums: GroupUserMetadataConnectionsAlbums;
    /**
     * Information about the appearances of this user in other videos.
     */
    appearances: GroupUserMetadataConnectionsAppearances;
    /**
     * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
     */
    block: GroupUserMetadataConnectionsBlock;
    /**
     * Information about this user's followed categories.
     */
    categories: GroupUserMetadataConnectionsCategories;
    /**
     * Information about this user's subscribed channels.
     */
    channels: GroupUserMetadataConnectionsChannels;
    /**
     * Information about this user's feed.
     */
    feed: GroupUserMetadataConnectionsFeed;
    /**
     * Information about this user's folders.
     */
    folders: GroupUserMetadataConnectionsFolders;
    /**
     * Information about the user's followers.
     */
    followers: GroupUserMetadataConnectionsFollowers;
    /**
     * Information about the users that the current user is following.
     */
    following: GroupUserMetadataConnectionsFollowing;
    /**
     * Information about the groups created by this user.
     */
    groups: GroupUserMetadataConnectionsGroups;
    /**
     * Information about the videos that this user has liked.
     */
    likes: GroupUserMetadataConnectionsLikes;
    /**
     * Information about the channels that this user moderates.
     */
    moderatedChannels: GroupUserMetadataConnectionsModeratedChannels;
    /**
     * Information about this user's portraits.
     */
    pictures: GroupUserMetadataConnectionsPictures;
    /**
     * Information about this user's portfolios.
     */
    portfolios: GroupUserMetadataConnectionsPortfolios;
    /**
     * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedChannels: GroupUserMetadataConnectionsRecommendedChannels;
    /**
     * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
     */
    recommendedUsers: GroupUserMetadataConnectionsRecommendedUsers;
    /**
     * Information about the videos that have been shared with this user.
     */
    shared: GroupUserMetadataConnectionsShared;
    /**
     * Information about the videos uploaded by this user.
     */
    videos: GroupUserMetadataConnectionsVideos;
    /**
     * Information about the videos that this user has watched.
     */
    watchedVideos: GroupUserMetadataConnectionsWatchedVideos;
    /**
     * Information about the videos that this user wants to watch later.
     */
    watchlater: GroupUserMetadataConnectionsWatchlater;
}
export declare class GroupUserMetadataInteractionsAddPrivacyUser extends SpeakeasyBase {
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
export declare class GroupUserMetadataInteractionsBlock extends SpeakeasyBase {
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
export declare class GroupUserMetadataInteractionsFollow extends SpeakeasyBase {
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
export declare class GroupUserMetadataInteractionsReport extends SpeakeasyBase {
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
export declare class GroupUserMetadataInteractions extends SpeakeasyBase {
    addPrivacyUser?: GroupUserMetadataInteractionsAddPrivacyUser;
    /**
     * Information related to the block status of this user.
     */
    block: GroupUserMetadataInteractionsBlock;
    /**
     * Information related to the followed status of this user.
     */
    follow: GroupUserMetadataInteractionsFollow;
    /**
     * Information regarding where and how to report a user.
     */
    report: GroupUserMetadataInteractionsReport;
}
/**
 * The user's metadata.
 */
export declare class GroupUserMetadata extends SpeakeasyBase {
    /**
     * The list of resource URIs related to the user.
     */
    connections: GroupUserMetadataConnections;
    interactions: GroupUserMetadataInteractions;
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
export declare enum GroupUserPreferencesVideosPrivacyCommentsEnum {
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
export declare enum GroupUserPreferencesVideosPrivacyEmbedEnum {
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
export declare enum GroupUserPreferencesVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class GroupUserPreferencesVideosPrivacy extends SpeakeasyBase {
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
    comments?: GroupUserPreferencesVideosPrivacyCommentsEnum;
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
    embed?: GroupUserPreferencesVideosPrivacyEmbedEnum;
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
    view?: GroupUserPreferencesVideosPrivacyViewEnum;
}
export declare class GroupUserPreferencesVideos extends SpeakeasyBase {
    privacy?: GroupUserPreferencesVideosPrivacy;
}
export declare class GroupUserPreferences extends SpeakeasyBase {
    videos?: GroupUserPreferencesVideos;
}
/**
 * Information about the user's lifetime upload usage.
 */
export declare class GroupUserUploadQuotaLifetime extends SpeakeasyBase {
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
export declare class GroupUserUploadQuotaPeriodic extends SpeakeasyBase {
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
export declare enum GroupUserUploadQuotaSpaceShowingEnum {
    Lifetime = "lifetime",
    Periodic = "periodic"
}
/**
 * Information about the user's upload space remaining for the current period.
 */
export declare class GroupUserUploadQuotaSpace extends SpeakeasyBase {
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
    showing: GroupUserUploadQuotaSpaceShowingEnum;
    /**
     * The number of bytes that you've already uploaded against your quota.
     */
    used: number;
}
/**
 * Appears only when the user has upload access and is looking at their own user record.
 */
export declare class GroupUserUploadQuota extends SpeakeasyBase {
    /**
     * Information about the user's lifetime upload usage.
     */
    lifetime: GroupUserUploadQuotaLifetime;
    /**
     * Information about the user's usage for the current period.
     */
    periodic: GroupUserUploadQuotaPeriodic;
    /**
     * Information about the user's upload space remaining for the current period.
     */
    space: GroupUserUploadQuotaSpace;
}
export declare class GroupUserWebsites extends SpeakeasyBase {
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
 * The owner of the group.
 */
export declare class GroupUser extends SpeakeasyBase {
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
    account: GroupUserAccountEnum;
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
    contentFilter?: GroupUserContentFilterEnum;
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
    metadata: GroupUserMetadata;
    /**
     * The user's display name.
     */
    name: string;
    /**
     * The active portrait of this user.
     */
    pictures: Picture;
    preferences?: GroupUserPreferences;
    /**
     * The user's resource key string.
     */
    resourceKey: string;
    /**
     * Appears only when the user has upload access and is looking at their own user record.
     */
    uploadQuota: GroupUserUploadQuota;
    /**
     * The user's canonical relative URI.
     */
    uri: string;
    /**
     * The user's websites.
     */
    websites: GroupUserWebsites[];
}
/**
 * The group was created.
 */
export declare class Group extends SpeakeasyBase {
    /**
     * The time in ISO 8601 format when the group was created.
     */
    createdTime: string;
    /**
     * The group's description.
     */
    description: string;
    /**
     * The link to the group.
     */
    link: string;
    /**
     * Metadata about the group.
     */
    metadata: GroupMetadata;
    /**
     * The time in ISO 8601 format when the group was last modified.
     */
    modifiedTime: string;
    /**
     * The group's display name.
     */
    name: string;
    /**
     * The active picture for this group.
     */
    pictures: Picture;
    /**
     * The group's privacy settings.
     */
    privacy: GroupPrivacy;
    /**
     * The resource key of the group.
     */
    resourceKey: string;
    /**
     * The canonical relative URI of this group.
     */
    uri: string;
    /**
     * The owner of the group.
     */
    user?: GroupUser;
}

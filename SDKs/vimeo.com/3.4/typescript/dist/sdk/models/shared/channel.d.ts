import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Picture } from "./picture";
import { Tag } from "./tag";
import { User } from "./user";
/**
 * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
 */
export declare class ChannelMetadataConnectionsPrivacyUsers extends SpeakeasyBase {
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
 * Information about the users following or moderating this channel.
 */
export declare class ChannelMetadataConnectionsUsers extends SpeakeasyBase {
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
 * Information about the videos that belong to this channel.
 */
export declare class ChannelMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class ChannelMetadataConnections extends SpeakeasyBase {
    /**
     * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
     */
    privacyUsers: ChannelMetadataConnectionsPrivacyUsers;
    /**
     * Information about the users following or moderating this channel.
     */
    users: ChannelMetadataConnectionsUsers;
    /**
     * Information about the videos that belong to this channel.
     */
    videos: ChannelMetadataConnectionsVideos;
}
/**
 * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
 */
export declare class ChannelMetadataInteractionsAddModerators extends SpeakeasyBase {
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
 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
 */
export declare class ChannelMetadataInteractionsAddTo extends SpeakeasyBase {
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
 * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `moderator` - The authenticated user is a moderator.
 *  * `subscriber` - The authenticated user is a subscriber.
 *
 */
export declare enum ChannelMetadataInteractionsFollowTypeEnum {
    Moderator = "moderator",
    Subscriber = "subscriber"
}
/**
 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
 */
export declare class ChannelMetadataInteractionsFollow extends SpeakeasyBase {
    /**
     * Whether the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format that the user followed this channel, or the null value if the user hasn't followed the channel. This data requires a bearer token with the `private` scope.
     */
    addedTime: string;
    /**
     * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `moderator` - The authenticated user is a moderator.
     *  * `subscriber` - The authenticated user is a subscriber.
     *
     */
    type: ChannelMetadataInteractionsFollowTypeEnum;
    /**
     * The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or DELETE to this URI to unfollow the channel. This data requires a bearer token with the `private` scope.
     */
    uri: string;
}
/**
 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
 */
export declare class ChannelMetadataInteractionsModerateVideos extends SpeakeasyBase {
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
 * A list of resource URIs related to the channel.
 */
export declare class ChannelMetadataInteractions extends SpeakeasyBase {
    /**
     * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
     */
    addModerators: ChannelMetadataInteractionsAddModerators;
    /**
     * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
     */
    addTo: ChannelMetadataInteractionsAddTo;
    /**
     * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
     */
    follow: ChannelMetadataInteractionsFollow;
    /**
     * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
     */
    moderateVideos: ChannelMetadataInteractionsModerateVideos;
}
/**
 * Metadata about the channel.
 */
export declare class ChannelMetadata extends SpeakeasyBase {
    /**
     * A collection of information that is connected to this resource.
     */
    connections: ChannelMetadataConnections;
    /**
     * A list of resource URIs related to the channel.
     */
    interactions: ChannelMetadataInteractions;
}
/**
 * Who can view the channel:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `anybody` - Anyone can view the channel.
 *  * `moderators` - Only moderators can view the channel.
 *  * `users` - Only registered users can view the channel.
 *
 */
export declare enum ChannelPrivacyViewEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    Users = "users"
}
/**
 * The privacy settings of the channel.
 */
export declare class ChannelPrivacy extends SpeakeasyBase {
    /**
     * Who can view the channel:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `anybody` - Anyone can view the channel.
     *  * `moderators` - Only moderators can view the channel.
     *  * `users` - Only registered users can view the channel.
     *
     */
    view: ChannelPrivacyViewEnum;
}
/**
 * The channel was created.
 */
export declare class Channel extends SpeakeasyBase {
    /**
     * The categories to which this channel belongs as specified by the channel moderators.
     */
    categories: Category[];
    /**
     * The time in ISO 8601 format when the channel was created.
     */
    createdTime: string;
    /**
     * A brief explanation of the channel's content.
     */
    description: string;
    /**
     * The banner that appears by default at the top of the channel page.
     */
    header: Picture;
    /**
     * The URL to access the channel in a browser.
     */
    link: string;
    /**
     * Metadata about the channel.
     */
    metadata: ChannelMetadata;
    /**
     * The time in ISO 8601 format when the album was last modified.
     */
    modifiedTime: string;
    /**
     * The display name that identifies the channel.
     */
    name: string;
    /**
     * The active image for the channel; defaults to the thumbnail of the last video added to the channel.
     */
    pictures: Picture;
    /**
     * The privacy settings of the channel.
     */
    privacy: ChannelPrivacy;
    /**
     * The channel resource key.
     */
    resourceKey: string;
    /**
     * An array of all tags assigned to this channel.
     */
    tags: Tag[];
    /**
     * The unique identifier to access the channel resource.
     */
    uri: string;
    /**
     * The Vimeo user who owns the channel.
     */
    user: User;
}

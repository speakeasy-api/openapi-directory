import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Channel } from "./channel";
import { Group } from "./group";
import { Tag } from "./tag";
import { User } from "./user";
import { Video } from "./video";
/**
 * Related content for this activity.
 */
export declare class Activity31MetadataConnectionsRelated extends SpeakeasyBase {
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
 * A list of resource URIs related to the activity.
 */
export declare class Activity31MetadataConnections extends SpeakeasyBase {
    /**
     * Related content for this activity.
     */
    related: Activity31MetadataConnectionsRelated;
}
/**
 * The activity's metadata.
 */
export declare class Activity31Metadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the activity.
     */
    connections: Activity31MetadataConnections;
}
/**
 * Activity type
 */
export declare enum Activity31TypeEnum {
    Appearance = "appearance",
    Category = "category",
    Channel = "channel",
    FacebookFeed = "facebook_feed",
    Group = "group",
    Like = "like",
    Ondemand = "ondemand",
    Share = "share",
    Tag = "tag",
    TwitterTimeline = "twitter_timeline",
    Upload = "upload"
}
export declare class Activity31 extends SpeakeasyBase {
    /**
     * The category that this event occurred for. This will be preset for only "category" activity types.
     */
    category?: Category;
    /**
     * The channel that this event occurred for. This will be present for only "channel" activity types.
     */
    channel?: Channel;
    /**
     * Video associated with ths activity.
     */
    clip: Video;
    /**
     * The group that this event occurred for. This will be present for only "group" activity types.
     */
    group?: Group;
    /**
     * The activity's metadata.
     */
    metadata: Activity31Metadata;
    /**
     * The tag that this event occurred for. This will be present for only "tag" activity types.
     */
    tag?: Tag;
    /**
     * Time that the event occurred.
     */
    time: string;
    /**
     * Activity type
     */
    type: Activity31TypeEnum;
    /**
     * The user that this event occurred for. This will be present for "like", "appearance", and "share" activity types.
     */
    user?: User;
}

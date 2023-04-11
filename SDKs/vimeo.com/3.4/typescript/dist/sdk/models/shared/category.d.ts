import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
/**
 * Information about the channels related to this category.
 */
export declare class CategoryMetadataConnectionsChannels extends SpeakeasyBase {
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
 * Information about the groups related to this category.
 */
export declare class CategoryMetadataConnectionsGroups extends SpeakeasyBase {
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
 * Information about the users related to this category.
 */
export declare class CategoryMetadataConnectionsUsers extends SpeakeasyBase {
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
 * Information about the videos related to this category.
 */
export declare class CategoryMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class CategoryMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the channels related to this category.
     */
    channels: CategoryMetadataConnectionsChannels;
    /**
     * Information about the groups related to this category.
     */
    groups: CategoryMetadataConnectionsGroups;
    /**
     * Information about the users related to this category.
     */
    users: CategoryMetadataConnectionsUsers;
    /**
     * Information about the videos related to this category.
     */
    videos: CategoryMetadataConnectionsVideos;
}
/**
 * An action indicating if the authenticated user has followed this category.
 */
export declare class CategoryMetadataInteractionsFollow extends SpeakeasyBase {
    /**
     * Whether the authenticated user has followed this category.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format that the user followed this category, or the null value if the user hasn't followed this category.
     */
    addedTime: string;
    /**
     * The URI for following or unfollowing this category: PUT to this URI to follow the category, or DELETE to this URI to unfollow the category.
     */
    uri: string;
}
/**
 * The permissible actions related to the category.
 */
export declare class CategoryMetadataInteractions extends SpeakeasyBase {
    /**
     * An action indicating if the authenticated user has followed this category.
     */
    follow: CategoryMetadataInteractionsFollow;
}
/**
 * Metadata about the category.
 */
export declare class CategoryMetadata extends SpeakeasyBase {
    /**
     * A collection of information that is connected to this resource.
     */
    connections: CategoryMetadataConnections;
    /**
     * The permissible actions related to the category.
     */
    interactions: CategoryMetadataInteractions;
}
/**
 * The container of this category's parent category, if the current category is a subcategory.
 */
export declare class CategoryParent extends SpeakeasyBase {
    /**
     * The URL to access the parent category in a browser.
     */
    link: string;
    /**
     * The display name that identifies the parent category.
     */
    name: string;
    /**
     * The unique identifier to access the parent of this category resource.
     */
    uri: string;
}
export declare class CategorySubcategories extends SpeakeasyBase {
    /**
     * The URL to access the subcategory in a browser.
     */
    link: string;
    /**
     * The display name that identifies the subcategory.
     */
    name: string;
    /**
     * The unique identifier to access the subcategory resource.
     */
    uri: string;
}
/**
 * The category was returned.
 */
export declare class Category extends SpeakeasyBase {
    /**
     * The active icon for the category.
     */
    icon?: Picture;
    /**
     * The last time, in ISO 8601 format, that a video was featured.
     */
    lastVideoFeaturedTime: string;
    /**
     * The URL to access the category in a browser.
     */
    link: string;
    /**
     * Metadata about the category.
     */
    metadata: CategoryMetadata;
    /**
     * The display name that identifies the category.
     */
    name: string;
    /**
     * The container of this category's parent category, if the current category is a subcategory.
     */
    parent: CategoryParent;
    /**
     * The active picture for this category; defaults to vertical color bars.
     */
    pictures: Picture;
    /**
     * The resource key of the category.
     */
    resourceKey: string;
    /**
     * All the subcategories that belong to this category, if the current category is a top-level parent.
     */
    subcategories?: CategorySubcategories[];
    /**
     * Whether the category isn't a subcategory of another category.
     */
    topLevel: boolean;
    /**
     * The unique identifier to access the category resource.
     */
    uri: string;
}

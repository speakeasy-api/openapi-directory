import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
import { User } from "./user";
/**
 * Information about purchasing this video.
 */
export declare class OnDemandVideoBuy extends SpeakeasyBase {
    /**
     * Whether this On Demand video can be purchased.
     */
    active: boolean;
    /**
     * A map of currency type to price.
     */
    price: Record<string, any>;
    /**
     * Whether this On Demand video has been purchased.
     */
    purchased?: boolean;
}
/**
 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
 */
export declare class OnDemandVideoInteractionsPage extends SpeakeasyBase {
    /**
     * Whether this On Demand page was added.
     */
    added: boolean;
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The URI to access the On Demand page.
     */
    uri: string;
}
/**
 * An object containing information about how the authenticated user can interact with this On Demand page.
 */
export declare class OnDemandVideoInteractions extends SpeakeasyBase {
    /**
     * Information about how the authenticated user can interact with the connection to the video's On Demand page.
     */
    page: OnDemandVideoInteractionsPage;
}
/**
 * Information about this season.
 */
export declare class OnDemandVideoMetadataConnectionsSeason extends SpeakeasyBase {
    /**
     * The name of the season on this connection.
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
export declare class OnDemandVideoMetadataConnections extends SpeakeasyBase {
    /**
     * Information about this season.
     */
    season: OnDemandVideoMetadataConnectionsSeason;
}
/**
 * Information about the user's Like interactions with this video.
 */
export declare class OnDemandVideoMetadataInteractionsLikes extends SpeakeasyBase {
    /**
     * Whether the user has liked this video.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format when the user liked this video.
     */
    addedTime: string;
    /**
     * The URI for the user to like this video.
     */
    uri: string;
}
/**
 * Information about the user's Watch Later interactions with this video.
 */
export declare class OnDemandVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
    /**
     * Whether the user has added this video to their Watch Later queue.
     */
    added: boolean;
    /**
     * The time in ISO 8601 format when the user added this video to their Watch Later queue.
     */
    addedTime: string;
    /**
     * The URI for the user to add this video to their Watch Later queue.
     */
    uri: string;
}
export declare class OnDemandVideoMetadataInteractions extends SpeakeasyBase {
    /**
     * Information about the user's Like interactions with this video.
     */
    likes: OnDemandVideoMetadataInteractionsLikes;
    /**
     * Information about the user's Watch Later interactions with this video.
     */
    watchlater: OnDemandVideoMetadataInteractionsWatchlater;
}
/**
 * Metadata information about this video.
 */
export declare class OnDemandVideoMetadata extends SpeakeasyBase {
    connections: OnDemandVideoMetadataConnections;
    interactions: OnDemandVideoMetadataInteractions;
}
/**
 * Information about renting this video.
 */
export declare class OnDemandVideoRent extends SpeakeasyBase {
    /**
     * Whether this On Demand video can be rented.
     */
    active: boolean;
    /**
     * A map of currency type to price.
     */
    price: Record<string, any>;
    /**
     * Whether this On Demand video has been rented.
     */
    purchased?: boolean;
}
/**
 * The type of the On Demand video:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `extra` - The On Demand video is an extra feature.
 *  * `main` - The On Demand video is a main feature.
 *  * `trailer` - The On Demand video is a trailer.
 *
 */
export declare enum OnDemandVideoTypeEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}
/**
 * The video was added.
 */
export declare class OnDemandVideo extends SpeakeasyBase {
    /**
     * Information about purchasing this video.
     */
    buy: OnDemandVideoBuy;
    /**
     * Description of the On Demand video.
     */
    description?: string;
    /**
     * The duration of the On Demand video.
     */
    duration?: string;
    /**
     * The episode number of the On Demand video.
     */
    episode?: number;
    /**
     * An object containing information about how the authenticated user can interact with this On Demand page.
     */
    interactions: OnDemandVideoInteractions;
    /**
     * The link to this video on Vimeo.
     */
    link: string;
    /**
     * Metadata information about this video.
     */
    metadata: OnDemandVideoMetadata;
    /**
     * The title of the On Demand video.
     */
    name?: string;
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options?: string[];
    /**
     * The active picture for this video.
     */
    pictures?: Picture;
    /**
     * The user's most recent play position in seconds for this video.
     */
    playProgress: number;
    /**
     * Describes the manual position of this video relative to the other videos owned by this On Demand page.
     */
    position?: number;
    /**
     * The time in ISO 8601 format when the On Demand video was created or published.
     */
    releaseDate?: string;
    /**
     * The year that this On Demand video was released.
     */
    releaseYear: number;
    /**
     * Information about renting this video.
     */
    rent: OnDemandVideoRent;
    /**
     * The type of the On Demand video:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `extra` - The On Demand video is an extra feature.
     *  * `main` - The On Demand video is a main feature.
     *  * `trailer` - The On Demand video is a trailer.
     *
     */
    type: OnDemandVideoTypeEnum;
    /**
     * The video container's relative URI.
     */
    uri: string;
    /**
     * The owner of the video.
     */
    user?: User;
}

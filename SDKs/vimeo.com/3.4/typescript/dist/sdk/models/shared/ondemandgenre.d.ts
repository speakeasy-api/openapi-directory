import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Interactions for On Demand pages that are in this genre.
 */
export declare class OnDemandGenreInteractionsPage extends SpeakeasyBase {
    /**
     * Whether this On Demand genre was added.
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
export declare class OnDemandGenreInteractions extends SpeakeasyBase {
    /**
     * Interactions for On Demand pages that are in this genre.
     */
    page: OnDemandGenreInteractionsPage;
}
/**
 * Information about the On Demand pages related to this group.
 */
export declare class OnDemandGenreMetadataConnectionsPages extends SpeakeasyBase {
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
 * A collection of information connected to this resource.
 */
export declare class OnDemandGenreMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the On Demand pages related to this group.
     */
    pages: OnDemandGenreMetadataConnectionsPages;
}
export declare class OnDemandGenreMetadata extends SpeakeasyBase {
    /**
     * A collection of information connected to this resource.
     */
    connections: OnDemandGenreMetadataConnections;
}
/**
 * The On Demand genre was returned.
 */
export declare class OnDemandGenre extends SpeakeasyBase {
    /**
     * The canonical name or URL slug of the genre.
     */
    canonical: string;
    interactions: OnDemandGenreInteractions;
    /**
     * The Vimeo URL for this genre.
     */
    link: string;
    metadata: OnDemandGenreMetadata;
    /**
     * The descriptive name of the genre.
     */
    name: string;
    /**
     * The relative URI of the On Demand genre.
     */
    uri: string;
}

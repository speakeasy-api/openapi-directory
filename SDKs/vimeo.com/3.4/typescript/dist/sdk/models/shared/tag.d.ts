import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the videos related to this tag.
 */
export declare class TagMetadataConnectionsVideos extends SpeakeasyBase {
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
export declare class TagMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the videos related to this tag.
     */
    videos: TagMetadataConnectionsVideos;
}
/**
 * Metadata about the group.
 */
export declare class TagMetadata extends SpeakeasyBase {
    /**
     * A collection of information that is connected to this resource.
     */
    connections: TagMetadataConnections;
}
/**
 * The tag was returned.
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * The normalized canonical tag name.
     */
    canonical: string;
    /**
     * Metadata about the group.
     */
    metadata: TagMetadata;
    /**
     * The tag value.
     */
    name: string;
    /**
     * The tag's resource key string.
     */
    resourceKey: string;
    /**
     * The canonical relative URI of the tag.
     */
    uri: string;
}

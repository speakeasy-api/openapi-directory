import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the videos contained within this portfolio.
 */
export declare class PortfolioMetadataConnectionsVideos extends SpeakeasyBase {
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
 * A list of resource URIs related to the album.
 */
export declare class PortfolioMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the videos contained within this portfolio.
     */
    videos: PortfolioMetadataConnectionsVideos;
}
/**
 * Metadata about the album.
 */
export declare class PortfolioMetadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the album.
     */
    connections: PortfolioMetadataConnections;
}
/**
 * The default video sort order for the portfolio:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `alphabetical` - The default sort order is alphabetical by name.
 *  * `clips` - The default sort order is video creation date.
 *  * `modified` - The default sort order is the order in which the videos were modified.
 *  * `recent` - The default sort order is the order in which the videos were added.
 *
 */
export declare enum PortfolioSortEnum {
    Alphabetical = "alphabetical",
    Clips = "clips",
    Modified = "modified",
    Recent = "recent"
}
/**
 * The portfolio was returned.
 */
export declare class Portfolio extends SpeakeasyBase {
    /**
     * The time in ISO 8601 format when the portfolio was created.
     */
    createdTime: string;
    /**
     * The portfolio's description.
     */
    description: string;
    /**
     * The link to the portfolio.
     */
    link: string;
    /**
     * Metadata about the album.
     */
    metadata: PortfolioMetadata;
    /**
     * The time in ISO 8601 format when the portfolio's data was last modified.
     */
    modifiedTime: string;
    /**
     * The display name of the portfolio.
     */
    name: string;
    /**
     * The default video sort order for the portfolio:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `alphabetical` - The default sort order is alphabetical by name.
     *  * `clips` - The default sort order is video creation date.
     *  * `modified` - The default sort order is the order in which the videos were modified.
     *  * `recent` - The default sort order is the order in which the videos were added.
     *
     */
    sort: PortfolioSortEnum;
    /**
     * The canonical relative URI of the portfolio.
     */
    uri: string;
}

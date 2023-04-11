import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A standard connection object indicating how to get all the videos in this project.
 */
export declare class ProjectMetadataConnectionsVideos extends SpeakeasyBase {
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
 * A list of resource URIs related to the project.
 */
export declare class ProjectMetadataConnections extends SpeakeasyBase {
    /**
     * A standard connection object indicating how to get all the videos in this project.
     */
    videos: ProjectMetadataConnectionsVideos;
}
/**
 * The project's metadata.
 */
export declare class ProjectMetadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the project.
     */
    connections: ProjectMetadataConnections;
}
/**
 * The project was created.
 */
export declare class Project extends SpeakeasyBase {
    /**
     * The time in ISO 8601 format when the project was created.
     */
    createdTime: string;
    /**
     * The project's metadata.
     */
    metadata: ProjectMetadata;
    /**
     * The time in ISO 8601 format when the project was last modified.
     */
    modifiedTime: string;
    /**
     * The name of the folder.
     */
    name: string;
    /**
     * The resource key string of the project.
     */
    resourceKey: string;
    /**
     * The URI of the project.
     */
    uri: string;
    /**
     * The owner of the project.
     */
    user: User;
}

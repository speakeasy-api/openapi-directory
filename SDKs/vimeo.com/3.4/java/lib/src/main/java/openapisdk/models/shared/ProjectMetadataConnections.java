package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProjectMetadataConnections
 * A list of resource URIs related to the project.
**/
public class ProjectMetadataConnections {
    @JsonProperty("videos")
    public ProjectMetadataConnectionsVideos videos;
    public ProjectMetadataConnections withVideos(ProjectMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
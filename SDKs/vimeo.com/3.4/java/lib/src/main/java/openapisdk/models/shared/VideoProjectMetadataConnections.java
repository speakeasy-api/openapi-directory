package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoProjectMetadataConnections
 * A list of resource URIs related to the project.
**/
public class VideoProjectMetadataConnections {
    @JsonProperty("videos")
    public VideoProjectMetadataConnectionsVideos videos;
    public VideoProjectMetadataConnections withVideos(VideoProjectMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
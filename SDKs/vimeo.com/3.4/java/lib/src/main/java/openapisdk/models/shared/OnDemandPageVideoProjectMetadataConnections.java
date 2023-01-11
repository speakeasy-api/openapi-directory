package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoProjectMetadataConnections
 * A list of resource URIs related to the project.
**/
public class OnDemandPageVideoProjectMetadataConnections {
    @JsonProperty("videos")
    public OnDemandPageVideoProjectMetadataConnectionsVideos videos;
    public OnDemandPageVideoProjectMetadataConnections withVideos(OnDemandPageVideoProjectMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
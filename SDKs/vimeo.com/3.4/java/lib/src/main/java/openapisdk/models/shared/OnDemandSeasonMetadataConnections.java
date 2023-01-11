package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandSeasonMetadataConnections {
    @JsonProperty("videos")
    public OnDemandSeasonMetadataConnectionsVideos videos;
    public OnDemandSeasonMetadataConnections withVideos(OnDemandSeasonMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PortfolioMetadataConnections
 * A list of resource URIs related to the album.
**/
public class PortfolioMetadataConnections {
    @JsonProperty("videos")
    public PortfolioMetadataConnectionsVideos videos;
    public PortfolioMetadataConnections withVideos(PortfolioMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
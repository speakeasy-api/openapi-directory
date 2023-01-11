package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsMetadataConnections
 * A list of resource URIs related to the album.
**/
public class PresetsMetadataConnections {
    @JsonProperty("videos")
    public PresetsMetadataConnectionsVideos videos;
    public PresetsMetadataConnections withVideos(PresetsMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
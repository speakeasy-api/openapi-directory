package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagMetadataConnections
 * A collection of information that is connected to this resource.
**/
public class TagMetadataConnections {
    @JsonProperty("videos")
    public TagMetadataConnectionsVideos videos;
    public TagMetadataConnections withVideos(TagMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
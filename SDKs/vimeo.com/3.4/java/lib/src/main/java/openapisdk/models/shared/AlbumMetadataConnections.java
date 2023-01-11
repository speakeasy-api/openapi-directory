package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumMetadataConnections
 * A collection of information that is connected to this resource.
**/
public class AlbumMetadataConnections {
    @JsonProperty("videos")
    public AlbumMetadataConnectionsVideos videos;
    public AlbumMetadataConnections withVideos(AlbumMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}
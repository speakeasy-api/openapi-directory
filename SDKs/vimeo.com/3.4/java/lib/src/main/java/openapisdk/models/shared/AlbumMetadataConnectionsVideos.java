package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumMetadataConnectionsVideos
 * Information about the videos that belong to this album.
**/
public class AlbumMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public AlbumMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public AlbumMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public AlbumMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
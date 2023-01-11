package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class VideoUserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class VideoVersionsUserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
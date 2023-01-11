package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class UserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
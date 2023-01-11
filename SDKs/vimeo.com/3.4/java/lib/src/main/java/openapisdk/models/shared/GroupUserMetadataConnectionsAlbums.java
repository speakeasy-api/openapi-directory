package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class GroupUserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
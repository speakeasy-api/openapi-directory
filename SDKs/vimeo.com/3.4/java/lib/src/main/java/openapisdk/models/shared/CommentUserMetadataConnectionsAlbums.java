package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class CommentUserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
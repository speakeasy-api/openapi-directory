package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class CommentUserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
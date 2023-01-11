package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class CommentUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
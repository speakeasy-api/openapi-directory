package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsFollowing
 * Information about the users that the current user is following.
**/
public class CommentUserMetadataConnectionsFollowing {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsFollowing withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsFollowing withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsFollowing withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
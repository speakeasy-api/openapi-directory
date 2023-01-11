package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsLikes
 * Information about the videos that this user has liked.
**/
public class CommentUserMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
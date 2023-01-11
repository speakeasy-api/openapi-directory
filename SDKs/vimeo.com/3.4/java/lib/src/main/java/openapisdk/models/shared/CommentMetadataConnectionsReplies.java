package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentMetadataConnectionsReplies
 * Information about this comment's replies.
**/
public class CommentMetadataConnectionsReplies {
    @JsonProperty("options")
    public String[] options;
    public CommentMetadataConnectionsReplies withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentMetadataConnectionsReplies withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentMetadataConnectionsReplies withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
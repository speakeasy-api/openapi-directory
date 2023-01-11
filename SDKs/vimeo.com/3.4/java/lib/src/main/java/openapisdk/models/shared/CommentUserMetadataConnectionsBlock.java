package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsBlock
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
public class CommentUserMetadataConnectionsBlock {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsBlock withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
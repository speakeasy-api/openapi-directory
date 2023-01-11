package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsModeratedChannels
 * Information about the channels that this user moderates.
**/
public class CommentUserMetadataConnectionsModeratedChannels {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsModeratedChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsModeratedChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsModeratedChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
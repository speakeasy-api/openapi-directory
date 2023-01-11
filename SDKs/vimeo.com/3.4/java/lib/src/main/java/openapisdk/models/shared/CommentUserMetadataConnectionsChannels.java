package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class CommentUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
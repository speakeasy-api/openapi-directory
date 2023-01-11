package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsWatchlater
 * Information about the videos that this user wants to watch later.
**/
public class CommentUserMetadataConnectionsWatchlater {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsWatchlater withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsWatchlater withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsWatchedVideos
 * Information about the videos that this user has watched.
**/
public class CommentUserMetadataConnectionsWatchedVideos {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsWatchedVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsWatchedVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsWatchedVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
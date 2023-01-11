package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsVideos
 * Information about the videos uploaded by this user.
**/
public class CommentUserMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
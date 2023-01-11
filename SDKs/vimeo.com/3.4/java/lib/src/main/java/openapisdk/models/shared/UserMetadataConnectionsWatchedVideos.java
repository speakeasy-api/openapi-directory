package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsWatchedVideos
 * Information about the videos that this user has watched.
**/
public class UserMetadataConnectionsWatchedVideos {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsWatchedVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsWatchedVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsWatchedVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
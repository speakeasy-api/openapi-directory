package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsWatchedVideos
 * Information about the videos that this user has watched.
**/
public class VideoVersionsUserMetadataConnectionsWatchedVideos {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsWatchedVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsWatchedVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsWatchedVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsWatchlater
 * Information about the videos that this user wants to watch later.
**/
public class VideoUserMetadataConnectionsWatchlater {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsWatchlater withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsWatchlater withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
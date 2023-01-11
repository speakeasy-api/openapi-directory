package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsVideos
 * Information about the videos uploaded by this user.
**/
public class VideoUserMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
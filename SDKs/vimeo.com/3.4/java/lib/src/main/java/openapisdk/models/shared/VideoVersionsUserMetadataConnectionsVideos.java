package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsVideos
 * Information about the videos uploaded by this user.
**/
public class VideoVersionsUserMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
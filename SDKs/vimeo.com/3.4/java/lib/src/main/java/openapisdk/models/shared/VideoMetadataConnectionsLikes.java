package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsLikes
 * Information about the users who have liked this video.
**/
public class VideoMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
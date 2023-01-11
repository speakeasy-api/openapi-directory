package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoProjectMetadataConnectionsVideos
 * A standard connection object indicating how to get all the videos in this project.
**/
public class VideoProjectMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public VideoProjectMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoProjectMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoProjectMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsComments
 * Information about the comments on this video.
**/
public class VideoMetadataConnectionsComments {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsComments withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoMetadataConnectionsComments withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsComments withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
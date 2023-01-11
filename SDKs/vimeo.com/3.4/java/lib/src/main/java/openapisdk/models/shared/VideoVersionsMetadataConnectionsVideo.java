package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsMetadataConnectionsVideo
 * Data from video associated with version
**/
public class VideoVersionsMetadataConnectionsVideo {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsMetadataConnectionsVideo withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsMetadataConnectionsVideo withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsMetadataConnectionsVideo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
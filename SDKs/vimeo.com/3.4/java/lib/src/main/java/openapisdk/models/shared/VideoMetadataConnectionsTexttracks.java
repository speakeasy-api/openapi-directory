package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsTexttracks
 * Information about this video's text tracks.
**/
public class VideoMetadataConnectionsTexttracks {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsTexttracks withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoMetadataConnectionsTexttracks withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsTexttracks withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
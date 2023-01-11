package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsMetadataConnectionsVideos
 * Information about the videos in this preset.
**/
public class PresetsMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public PresetsMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
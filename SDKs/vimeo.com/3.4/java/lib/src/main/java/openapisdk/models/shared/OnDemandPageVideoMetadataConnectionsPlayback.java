package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsPlayback
 * The DRM playback status connection for this video.
**/
public class OnDemandPageVideoMetadataConnectionsPlayback {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsPlayback withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsPlayback withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
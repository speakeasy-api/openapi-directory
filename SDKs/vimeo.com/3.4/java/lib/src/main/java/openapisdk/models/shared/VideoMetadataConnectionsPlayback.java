package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsPlayback
 * The DRM playback status connection for this video.
**/
public class VideoMetadataConnectionsPlayback {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsPlayback withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsPlayback withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
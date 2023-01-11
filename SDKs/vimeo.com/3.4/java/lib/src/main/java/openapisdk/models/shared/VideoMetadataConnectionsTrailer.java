package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsTrailer
 * Information about this video's VOD trailer.
**/
public class VideoMetadataConnectionsTrailer {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsTrailer withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public VideoMetadataConnectionsTrailer withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsTrailer withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
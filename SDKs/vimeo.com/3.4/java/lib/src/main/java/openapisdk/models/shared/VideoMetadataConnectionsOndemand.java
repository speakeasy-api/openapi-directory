package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsOndemand
 * Information about this video's ondemand data.
**/
public class VideoMetadataConnectionsOndemand {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsOndemand withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public VideoMetadataConnectionsOndemand withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsOndemand withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
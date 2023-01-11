package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsTrailer
 * Information about this video's VOD trailer.
**/
public class OnDemandPageVideoMetadataConnectionsTrailer {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsTrailer withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPageVideoMetadataConnectionsTrailer withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsTrailer withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
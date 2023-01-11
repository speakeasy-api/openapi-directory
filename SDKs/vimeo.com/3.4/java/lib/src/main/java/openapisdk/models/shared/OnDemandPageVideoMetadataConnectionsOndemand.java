package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsOndemand
 * Information about this video's ondemand data.
**/
public class OnDemandPageVideoMetadataConnectionsOndemand {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsOndemand withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPageVideoMetadataConnectionsOndemand withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsOndemand withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
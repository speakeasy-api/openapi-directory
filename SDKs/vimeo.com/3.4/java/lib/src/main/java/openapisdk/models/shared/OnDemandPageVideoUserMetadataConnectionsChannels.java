package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class OnDemandPageVideoUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
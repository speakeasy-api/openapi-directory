package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class OnDemandPageUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
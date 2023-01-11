package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class OnDemandSeasonUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
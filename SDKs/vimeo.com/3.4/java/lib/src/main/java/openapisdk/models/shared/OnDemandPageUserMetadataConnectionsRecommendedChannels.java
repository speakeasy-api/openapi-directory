package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsRecommendedChannels
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
public class OnDemandPageUserMetadataConnectionsRecommendedChannels {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsRecommendedChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsRecommendedChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsRecommendedChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
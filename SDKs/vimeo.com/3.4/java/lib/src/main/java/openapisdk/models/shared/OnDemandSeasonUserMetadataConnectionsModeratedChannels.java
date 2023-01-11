package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsModeratedChannels
 * Information about the channels that this user moderates.
**/
public class OnDemandSeasonUserMetadataConnectionsModeratedChannels {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsModeratedChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsModeratedChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsModeratedChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
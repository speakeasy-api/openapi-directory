package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsBlock
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
public class OnDemandSeasonUserMetadataConnectionsBlock {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsBlock withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
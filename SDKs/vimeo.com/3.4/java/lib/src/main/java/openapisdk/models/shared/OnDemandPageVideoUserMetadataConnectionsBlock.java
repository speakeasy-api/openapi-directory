package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataConnectionsBlock
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
public class OnDemandPageVideoUserMetadataConnectionsBlock {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataConnectionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoUserMetadataConnectionsBlock withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataConnectionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class OnDemandPageVideoUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
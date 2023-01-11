package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class OnDemandPageUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class OnDemandPageUserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
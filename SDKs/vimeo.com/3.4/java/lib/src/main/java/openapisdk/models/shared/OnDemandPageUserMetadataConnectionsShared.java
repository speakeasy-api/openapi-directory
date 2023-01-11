package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class OnDemandPageUserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
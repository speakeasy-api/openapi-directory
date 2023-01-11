package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsCategories
 * Information about this user's followed categories.
**/
public class OnDemandPageUserMetadataConnectionsCategories {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsCategories withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsCategories withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsCategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsPictures
 * Information about this user's portraits.
**/
public class OnDemandPageUserMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsPictures
 * Information about this user's portraits.
**/
public class OnDemandSeasonUserMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
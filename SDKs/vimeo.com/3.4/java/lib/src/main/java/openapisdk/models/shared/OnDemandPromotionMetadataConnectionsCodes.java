package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPromotionMetadataConnectionsCodes
 * Information about the codes associated with this promotion.
**/
public class OnDemandPromotionMetadataConnectionsCodes {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPromotionMetadataConnectionsCodes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPromotionMetadataConnectionsCodes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPromotionMetadataConnectionsCodes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
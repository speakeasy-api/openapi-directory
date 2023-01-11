package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPromotionMetadataConnections
 * A list of resource URIs related to the On Demand promotion.
**/
public class OnDemandPromotionMetadataConnections {
    @JsonProperty("codes")
    public OnDemandPromotionMetadataConnectionsCodes codes;
    public OnDemandPromotionMetadataConnections withCodes(OnDemandPromotionMetadataConnectionsCodes codes) {
        this.codes = codes;
        return this;
    }
}
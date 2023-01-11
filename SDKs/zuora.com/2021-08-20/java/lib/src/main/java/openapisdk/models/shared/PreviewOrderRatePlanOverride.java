package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderRatePlanOverride
 * Rate plan associated with a subscription.
 * 
**/
public class PreviewOrderRatePlanOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeOverrides")
    public PreviewOrderChargeOverride[] chargeOverrides;
    public PreviewOrderRatePlanOverride withChargeOverrides(PreviewOrderChargeOverride[] chargeOverrides) {
        this.chargeOverrides = chargeOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PreviewOrderRatePlanOverride withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public PreviewOrderRatePlanOverride withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public PreviewOrderRatePlanOverride withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RatePlanOverrideForEvergreen
 * Rate plan associated with a subscription.
 * 
**/
public class RatePlanOverrideForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeOverrides")
    public ChargeOverrideForEvergreen[] chargeOverrides;
    public RatePlanOverrideForEvergreen withChargeOverrides(ChargeOverrideForEvergreen[] chargeOverrides) {
        this.chargeOverrides = chargeOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public RatePlanOverrideForEvergreen withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRatePlanId")
    public String newRatePlanId;
    public RatePlanOverrideForEvergreen withNewRatePlanId(String newRatePlanId) {
        this.newRatePlanId = newRatePlanId;
        return this;
    }
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public RatePlanOverrideForEvergreen withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public RatePlanOverrideForEvergreen withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}
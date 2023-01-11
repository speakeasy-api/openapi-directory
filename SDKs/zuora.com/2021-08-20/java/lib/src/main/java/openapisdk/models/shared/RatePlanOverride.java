package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RatePlanOverride
 * Rate plan associated with a subscription.
 * 
**/
public class RatePlanOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeOverrides")
    public ChargeOverride[] chargeOverrides;
    public RatePlanOverride withChargeOverrides(ChargeOverride[] chargeOverrides) {
        this.chargeOverrides = chargeOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public RatePlanOverride withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRatePlanId")
    public String newRatePlanId;
    public RatePlanOverride withNewRatePlanId(String newRatePlanId) {
        this.newRatePlanId = newRatePlanId;
        return this;
    }
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public RatePlanOverride withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public RatePlanOverride withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}
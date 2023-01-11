package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RatePlanChargeData {
    @JsonProperty("RatePlanCharge")
    public java.util.Map<String, Object> ratePlanCharge;
    public RatePlanChargeData withRatePlanCharge(java.util.Map<String, Object> ratePlanCharge) {
        this.ratePlanCharge = ratePlanCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePlanChargeTier")
    public RatePlanChargeTier[] ratePlanChargeTier;
    public RatePlanChargeData withRatePlanChargeTier(RatePlanChargeTier[] ratePlanChargeTier) {
        this.ratePlanChargeTier = ratePlanChargeTier;
        return this;
    }
}
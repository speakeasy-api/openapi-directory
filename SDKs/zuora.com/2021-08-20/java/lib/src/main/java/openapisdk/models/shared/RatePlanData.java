package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RatePlanData {
    @JsonProperty("RatePlan")
    public java.util.Map<String, Object> ratePlan;
    public RatePlanData withRatePlan(java.util.Map<String, Object> ratePlan) {
        this.ratePlan = ratePlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePlanChargeData")
    public RatePlanChargeData[] ratePlanChargeData;
    public RatePlanData withRatePlanChargeData(RatePlanChargeData[] ratePlanChargeData) {
        this.ratePlanChargeData = ratePlanChargeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionProductFeatureList")
    public RatePlanDataSubscriptionProductFeatureList subscriptionProductFeatureList;
    public RatePlanData withSubscriptionProductFeatureList(RatePlanDataSubscriptionProductFeatureList subscriptionProductFeatureList) {
        this.subscriptionProductFeatureList = subscriptionProductFeatureList;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmendmentRatePlanData
 * A container for one `RatePlanData`. This field is only required if the `Type` field is set to `NewProduct`, `RemoveProduct`, or `UpdateProduct`.
 * 
**/
public class AmendmentRatePlanData {
    @JsonProperty("RatePlan")
    public RatePlan ratePlan;
    public AmendmentRatePlanData withRatePlan(RatePlan ratePlan) {
        this.ratePlan = ratePlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePlanChargeData")
    public RatePlanChargeDataInRatePlanData[] ratePlanChargeData;
    public AmendmentRatePlanData withRatePlanChargeData(RatePlanChargeDataInRatePlanData[] ratePlanChargeData) {
        this.ratePlanChargeData = ratePlanChargeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionProductFeatureList")
    public SubscriptionProductFeatureList subscriptionProductFeatureList;
    public AmendmentRatePlanData withSubscriptionProductFeatureList(SubscriptionProductFeatureList subscriptionProductFeatureList) {
        this.subscriptionProductFeatureList = subscriptionProductFeatureList;
        return this;
    }
}
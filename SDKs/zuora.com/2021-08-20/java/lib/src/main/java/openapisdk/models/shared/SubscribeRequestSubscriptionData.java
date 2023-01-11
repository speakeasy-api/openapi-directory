package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubscribeRequestSubscriptionData
 *  This object contains the information on the contract's dates and terms.
 * 
 * 
 * **Values:** A valid SubscriptionData object. 
**/
public class SubscribeRequestSubscriptionData {
    @JsonProperty("RatePlanData")
    public RatePlanData[] ratePlanData;
    public SubscribeRequestSubscriptionData withRatePlanData(RatePlanData[] ratePlanData) {
        this.ratePlanData = ratePlanData;
        return this;
    }
    @JsonProperty("Subscription")
    public java.util.Map<String, Object> subscription;
    public SubscribeRequestSubscriptionData withSubscription(java.util.Map<String, Object> subscription) {
        this.subscription = subscription;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RatePlanDataSubscriptionProductFeatureList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionProductFeature")
    public java.util.Map<String, Object>[] subscriptionProductFeature;
    public RatePlanDataSubscriptionProductFeatureList withSubscriptionProductFeature(java.util.Map<String, Object>[] subscriptionProductFeature) {
        this.subscriptionProductFeature = subscriptionProductFeature;
        return this;
    }
}
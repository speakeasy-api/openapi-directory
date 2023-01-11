package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscriptionProductFeatureList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionProductFeature")
    public ActionAmendSubscriptionProductFeature[] subscriptionProductFeature;
    public SubscriptionProductFeatureList withSubscriptionProductFeature(ActionAmendSubscriptionProductFeature[] subscriptionProductFeature) {
        this.subscriptionProductFeature = subscriptionProductFeature;
        return this;
    }
}
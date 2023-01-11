package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewResultOrderMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActions")
    public PreviewResultOrderMetricsOrderActions[] orderActions;
    public PreviewResultOrderMetrics withOrderActions(PreviewResultOrderMetricsOrderActions[] orderActions) {
        this.orderActions = orderActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PreviewResultOrderMetrics withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
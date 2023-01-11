package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderPatchRequestTypeSubscriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActions")
    public PutOrderPatchRequestTypeSubscriptionsOrderActions[] orderActions;
    public PutOrderPatchRequestTypeSubscriptions withOrderActions(PutOrderPatchRequestTypeSubscriptionsOrderActions[] orderActions) {
        this.orderActions = orderActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PutOrderPatchRequestTypeSubscriptions withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
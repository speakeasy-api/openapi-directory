package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderTriggerDatesResponseTypeSubscriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum status;
    public PutOrderTriggerDatesResponseTypeSubscriptions withStatus(PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PutOrderTriggerDatesResponseTypeSubscriptions withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
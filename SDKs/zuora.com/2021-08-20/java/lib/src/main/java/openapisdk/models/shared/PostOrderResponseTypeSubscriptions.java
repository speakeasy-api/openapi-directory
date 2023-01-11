package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderResponseTypeSubscriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PostOrderResponseTypeSubscriptionsStatusEnum status;
    public PostOrderResponseTypeSubscriptions withStatus(PostOrderResponseTypeSubscriptionsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public PostOrderResponseTypeSubscriptions withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PostOrderResponseTypeSubscriptions withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
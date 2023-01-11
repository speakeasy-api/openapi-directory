package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobResultSubscriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobResultSubscriptionsStatusEnum status;
    public JobResultSubscriptions withStatus(JobResultSubscriptionsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public JobResultSubscriptions withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderResponseTypeRamps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rampNumber")
    public String rampNumber;
    public PostOrderResponseTypeRamps withRampNumber(String rampNumber) {
        this.rampNumber = rampNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PostOrderResponseTypeRamps withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobResultRamps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rampNumber")
    public String rampNumber;
    public JobResultRamps withRampNumber(String rampNumber) {
        this.rampNumber = rampNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public JobResultRamps withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
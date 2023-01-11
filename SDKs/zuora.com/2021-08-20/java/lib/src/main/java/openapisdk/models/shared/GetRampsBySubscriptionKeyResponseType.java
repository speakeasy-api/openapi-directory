package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRampsBySubscriptionKeyResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetRampsBySubscriptionKeyResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramps")
    public RampResponse[] ramps;
    public GetRampsBySubscriptionKeyResponseType withRamps(RampResponse[] ramps) {
        this.ramps = ramps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetRampsBySubscriptionKeyResponseTypeReasons[] reasons;
    public GetRampsBySubscriptionKeyResponseType withReasons(GetRampsBySubscriptionKeyResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRampsBySubscriptionKeyResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
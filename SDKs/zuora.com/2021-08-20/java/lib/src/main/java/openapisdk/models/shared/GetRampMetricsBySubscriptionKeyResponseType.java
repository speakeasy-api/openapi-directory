package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRampMetricsBySubscriptionKeyResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetRampMetricsBySubscriptionKeyResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rampMetrics")
    public RampMetrics rampMetrics;
    public GetRampMetricsBySubscriptionKeyResponseType withRampMetrics(RampMetrics rampMetrics) {
        this.rampMetrics = rampMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetRampMetricsBySubscriptionKeyResponseTypeReasons[] reasons;
    public GetRampMetricsBySubscriptionKeyResponseType withReasons(GetRampMetricsBySubscriptionKeyResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRampMetricsBySubscriptionKeyResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRampMetricsByRampNumberResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetRampMetricsByRampNumberResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rampMetrics")
    public RampMetrics rampMetrics;
    public GetRampMetricsByRampNumberResponseType withRampMetrics(RampMetrics rampMetrics) {
        this.rampMetrics = rampMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetRampMetricsByRampNumberResponseTypeReasons[] reasons;
    public GetRampMetricsByRampNumberResponseType withReasons(GetRampMetricsByRampNumberResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRampMetricsByRampNumberResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
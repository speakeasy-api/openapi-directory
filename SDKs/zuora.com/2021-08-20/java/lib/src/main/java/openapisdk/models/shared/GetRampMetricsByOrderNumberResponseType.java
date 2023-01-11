package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRampMetricsByOrderNumberResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetRampMetricsByOrderNumberResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rampMetrics")
    public OrderRampMetrics[] rampMetrics;
    public GetRampMetricsByOrderNumberResponseType withRampMetrics(OrderRampMetrics[] rampMetrics) {
        this.rampMetrics = rampMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetRampMetricsByOrderNumberResponseTypeReasons[] reasons;
    public GetRampMetricsByOrderNumberResponseType withReasons(GetRampMetricsByOrderNumberResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRampMetricsByOrderNumberResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
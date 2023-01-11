package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallLogMetricsDetails200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_id")
    public String callId;
    public GetCallLogMetricsDetails200ApplicationJson withCallId(String callId) {
        this.callId = callId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee")
    public GetCallLogMetricsDetails200ApplicationJsonCallee callee;
    public GetCallLogMetricsDetails200ApplicationJson withCallee(GetCallLogMetricsDetails200ApplicationJsonCallee callee) {
        this.callee = callee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller")
    public GetCallLogMetricsDetails200ApplicationJsonCaller caller;
    public GetCallLogMetricsDetails200ApplicationJson withCaller(GetCallLogMetricsDetails200ApplicationJsonCaller caller) {
        this.caller = caller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public String dateTime;
    public GetCallLogMetricsDetails200ApplicationJson withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public GetCallLogMetricsDetails200ApplicationJson withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public GetCallLogMetricsDetails200ApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mos")
    public String mos;
    public GetCallLogMetricsDetails200ApplicationJson withMos(String mos) {
        this.mos = mos;
        return this;
    }
}
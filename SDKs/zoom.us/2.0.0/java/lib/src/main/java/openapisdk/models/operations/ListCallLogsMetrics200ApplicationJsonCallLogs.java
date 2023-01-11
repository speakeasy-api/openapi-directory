package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallLogsMetrics200ApplicationJsonCallLogs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_id")
    public String callId;
    public ListCallLogsMetrics200ApplicationJsonCallLogs withCallId(String callId) {
        this.callId = callId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee")
    public ListCallLogsMetrics200ApplicationJsonCallLogsCallee callee;
    public ListCallLogsMetrics200ApplicationJsonCallLogs withCallee(ListCallLogsMetrics200ApplicationJsonCallLogsCallee callee) {
        this.callee = callee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller")
    public ListCallLogsMetrics200ApplicationJsonCallLogsCaller caller;
    public ListCallLogsMetrics200ApplicationJsonCallLogs withCaller(ListCallLogsMetrics200ApplicationJsonCallLogsCaller caller) {
        this.caller = caller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public String dateTime;
    public ListCallLogsMetrics200ApplicationJsonCallLogs withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public ListCallLogsMetrics200ApplicationJsonCallLogs withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public ListCallLogsMetrics200ApplicationJsonCallLogs withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mos")
    public String mos;
    public ListCallLogsMetrics200ApplicationJsonCallLogs withMos(String mos) {
        this.mos = mos;
        return this;
    }
}
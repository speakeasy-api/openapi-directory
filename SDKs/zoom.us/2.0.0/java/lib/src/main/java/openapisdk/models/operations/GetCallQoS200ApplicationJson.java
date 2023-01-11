package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallQoS200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_id")
    public String callId;
    public GetCallQoS200ApplicationJson withCallId(String callId) {
        this.callId = callId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_qos")
    public GetCallQoS200ApplicationJsonCalleeQos calleeQos;
    public GetCallQoS200ApplicationJson withCalleeQos(GetCallQoS200ApplicationJsonCalleeQos calleeQos) {
        this.calleeQos = calleeQos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_qos")
    public GetCallQoS200ApplicationJsonCallerQos callerQos;
    public GetCallQoS200ApplicationJson withCallerQos(GetCallQoS200ApplicationJsonCallerQos callerQos) {
        this.callerQos = callerQos;
        return this;
    }
}
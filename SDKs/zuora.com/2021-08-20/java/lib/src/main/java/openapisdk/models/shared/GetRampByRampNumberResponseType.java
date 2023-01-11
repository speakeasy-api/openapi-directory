package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRampByRampNumberResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public GetRampByRampNumberResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramp")
    public RampResponse ramp;
    public GetRampByRampNumberResponseType withRamp(RampResponse ramp) {
        this.ramp = ramp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GetRampByRampNumberResponseTypeReasons[] reasons;
    public GetRampByRampNumberResponseType withReasons(GetRampByRampNumberResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRampByRampNumberResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EvaluateRebalanceSwitchInstructionRequest
 * Definition of Switch instruction
**/
public class EvaluateRebalanceSwitchInstructionRequest {
    @JsonProperty("request_id")
    public String requestId;
    public EvaluateRebalanceSwitchInstructionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("type")
    public EvaluateRebalanceSwitchInstructionRequestTypeEnum type;
    public EvaluateRebalanceSwitchInstructionRequest withType(EvaluateRebalanceSwitchInstructionRequestTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public EvaluateRebalanceSwitchInstructionRequest withValues(String[] values) {
        this.values = values;
        return this;
    }
}
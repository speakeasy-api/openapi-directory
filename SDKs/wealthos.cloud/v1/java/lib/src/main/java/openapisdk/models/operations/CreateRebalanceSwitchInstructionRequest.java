package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateRebalanceSwitchInstructionRequest
 * Definition of Switch instruction
**/
public class CreateRebalanceSwitchInstructionRequest {
    @JsonProperty("request_id")
    public String requestId;
    public CreateRebalanceSwitchInstructionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("type")
    public CreateRebalanceSwitchInstructionRequestTypeEnum type;
    public CreateRebalanceSwitchInstructionRequest withType(CreateRebalanceSwitchInstructionRequestTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public CreateRebalanceSwitchInstructionRequest withValues(String[] values) {
        this.values = values;
        return this;
    }
}
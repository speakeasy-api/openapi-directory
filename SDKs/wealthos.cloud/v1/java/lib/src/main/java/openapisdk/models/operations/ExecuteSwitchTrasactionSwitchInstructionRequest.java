package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecuteSwitchTrasactionSwitchInstructionRequest
 * Definition of Switch instruction
**/
public class ExecuteSwitchTrasactionSwitchInstructionRequest {
    @JsonProperty("buy_instructions")
    public ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] buyInstructions;
    public ExecuteSwitchTrasactionSwitchInstructionRequest withBuyInstructions(ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] buyInstructions) {
        this.buyInstructions = buyInstructions;
        return this;
    }
    @JsonProperty("pot_id")
    public String potId;
    public ExecuteSwitchTrasactionSwitchInstructionRequest withPotId(String potId) {
        this.potId = potId;
        return this;
    }
    @JsonProperty("request_id")
    public String requestId;
    public ExecuteSwitchTrasactionSwitchInstructionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("sell_instructions")
    public ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] sellInstructions;
    public ExecuteSwitchTrasactionSwitchInstructionRequest withSellInstructions(ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] sellInstructions) {
        this.sellInstructions = sellInstructions;
        return this;
    }
}
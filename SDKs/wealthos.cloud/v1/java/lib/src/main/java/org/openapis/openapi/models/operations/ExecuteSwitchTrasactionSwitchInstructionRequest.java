/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecuteSwitchTrasactionSwitchInstructionRequest - Definition of Switch instruction
 */
public class ExecuteSwitchTrasactionSwitchInstructionRequest {
    @JsonProperty("buy_instructions")
    public ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] buyInstructions;

    public ExecuteSwitchTrasactionSwitchInstructionRequest withBuyInstructions(ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] buyInstructions) {
        this.buyInstructions = buyInstructions;
        return this;
    }
    
    /**
     * Identifier of the pot the instruction is sent to
     */
    @JsonProperty("pot_id")
    public String potId;

    public ExecuteSwitchTrasactionSwitchInstructionRequest withPotId(String potId) {
        this.potId = potId;
        return this;
    }
    
    /**
     * Unique request id to ensure idempotency. (eg: UUID)
     */
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
    
    public ExecuteSwitchTrasactionSwitchInstructionRequest(@JsonProperty("buy_instructions") ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] buyInstructions, @JsonProperty("pot_id") String potId, @JsonProperty("request_id") String requestId, @JsonProperty("sell_instructions") ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[] sellInstructions) {
        this.buyInstructions = buyInstructions;
        this.potId = potId;
        this.requestId = requestId;
        this.sellInstructions = sellInstructions;
  }
}

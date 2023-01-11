package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecuteSellTrasactionSellTransactionRequest
 * Definition of an sell transaction request
**/
public class ExecuteSellTrasactionSellTransactionRequest {
    @JsonProperty("pot_id")
    public String potId;
    public ExecuteSellTrasactionSellTransactionRequest withPotId(String potId) {
        this.potId = potId;
        return this;
    }
    @JsonProperty("request_id")
    public String requestId;
    public ExecuteSellTrasactionSellTransactionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("sell_instructions")
    public ExecuteSellTrasactionSellTransactionRequestInstructionBuySell[] sellInstructions;
    public ExecuteSellTrasactionSellTransactionRequest withSellInstructions(ExecuteSellTrasactionSellTransactionRequestInstructionBuySell[] sellInstructions) {
        this.sellInstructions = sellInstructions;
        return this;
    }
}
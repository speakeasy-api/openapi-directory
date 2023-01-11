package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecuteBuyTrasactionBuyTransactionRequest
 * Definition of an buy transaction request
**/
public class ExecuteBuyTrasactionBuyTransactionRequest {
    @JsonProperty("investment_instructions")
    public ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell[] investmentInstructions;
    public ExecuteBuyTrasactionBuyTransactionRequest withInvestmentInstructions(ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell[] investmentInstructions) {
        this.investmentInstructions = investmentInstructions;
        return this;
    }
    @JsonProperty("pot_id")
    public String potId;
    public ExecuteBuyTrasactionBuyTransactionRequest withPotId(String potId) {
        this.potId = potId;
        return this;
    }
    @JsonProperty("request_id")
    public String requestId;
    public ExecuteBuyTrasactionBuyTransactionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}
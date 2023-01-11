package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest
 * Each individual buy side and sell side instruction of the Switch request
**/
public class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest {
    @JsonProperty("investment_product_id")
    public String investmentProductId;
    public ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest withInvestmentProductId(String investmentProductId) {
        this.investmentProductId = investmentProductId;
        return this;
    }
    @JsonProperty("mode")
    public ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum mode;
    public ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest withMode(ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest withValue(String value) {
        this.value = value;
        return this;
    }
}
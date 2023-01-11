package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell
 * Definition of an single instruction(buy|sell)
**/
public class ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_order_id")
    public String clientOrderId;
    public ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell withClientOrderId(String clientOrderId) {
        this.clientOrderId = clientOrderId;
        return this;
    }
    @JsonProperty("investment_product_id")
    public String investmentProductId;
    public ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell withInvestmentProductId(String investmentProductId) {
        this.investmentProductId = investmentProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell withValue(String value) {
        this.value = value;
        return this;
    }
}
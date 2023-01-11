package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDebitMemoCollect200ApplicationJsonProcessedPayment
 * The information about the payment that newly processed to the debit memo.
 * 
**/
public class PostDebitMemoCollect200ApplicationJsonProcessedPayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponse")
    public String gatewayResponse;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponseCode")
    public String gatewayResponseCode;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum status;
    public PostDebitMemoCollect200ApplicationJsonProcessedPayment withStatus(PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum status) {
        this.status = status;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DebitMemoCollectRequestPayment
 * Some detail info that would be used to processed an electronic payment.
 * The info would only effect when `collect` set to `true`.
 * 
**/
public class DebitMemoCollectRequestPayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public DebitMemoCollectRequestPayment withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public DebitMemoCollectRequestPayment withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}
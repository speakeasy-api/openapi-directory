package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ElectronicPaymentOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethodId")
    public String paymentMethodId;
    public ElectronicPaymentOptions withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}
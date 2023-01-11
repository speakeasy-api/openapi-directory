package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentGatwaysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentgateways")
    public GetaPaymentGatwayResponse[] paymentgateways;
    public GetPaymentGatwaysResponse withPaymentgateways(GetaPaymentGatwayResponse[] paymentgateways) {
        this.paymentgateways = paymentgateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentGatwaysResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPaymentMethodResponseDecryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public PostPaymentMethodResponseDecryption withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PostPaymentMethodResponseDecryption withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostPaymentMethodResponseDecryption withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostPaymentMethodResponseDecryption withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
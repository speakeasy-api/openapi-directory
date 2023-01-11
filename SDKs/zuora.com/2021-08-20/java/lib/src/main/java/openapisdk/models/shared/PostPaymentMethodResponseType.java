package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPaymentMethodResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostPaymentMethodResponseType withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostPaymentMethodResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
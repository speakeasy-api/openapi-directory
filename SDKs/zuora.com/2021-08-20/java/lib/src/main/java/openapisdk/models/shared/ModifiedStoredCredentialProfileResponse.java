package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifiedStoredCredentialProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Long number;
    public ModifiedStoredCredentialProfileResponse withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public ModifiedStoredCredentialProfileResponse withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ModifiedStoredCredentialProfileResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
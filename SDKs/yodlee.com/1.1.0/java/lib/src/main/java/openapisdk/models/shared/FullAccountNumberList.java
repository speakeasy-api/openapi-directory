package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FullAccountNumberList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentAccountNumber")
    public String paymentAccountNumber;
    public FullAccountNumberList withPaymentAccountNumber(String paymentAccountNumber) {
        this.paymentAccountNumber = paymentAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unmaskedAccountNumber")
    public String unmaskedAccountNumber;
    public FullAccountNumberList withUnmaskedAccountNumber(String unmaskedAccountNumber) {
        this.unmaskedAccountNumber = unmaskedAccountNumber;
        return this;
    }
}
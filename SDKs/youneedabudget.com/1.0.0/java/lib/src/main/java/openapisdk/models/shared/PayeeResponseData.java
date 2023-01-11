package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeeResponseData {
    @JsonProperty("payee")
    public Payee payee;
    public PayeeResponseData withPayee(Payee payee) {
        this.payee = payee;
        return this;
    }
}
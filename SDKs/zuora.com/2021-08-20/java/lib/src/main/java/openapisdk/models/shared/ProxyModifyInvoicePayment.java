package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyModifyInvoicePayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public ProxyModifyInvoicePayment withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
}
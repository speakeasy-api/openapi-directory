package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentInvoiceApplicationItemApplyRequestType {
    @JsonProperty("amount")
    public Double amount;
    public PaymentInvoiceApplicationItemApplyRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItemId")
    public String invoiceItemId;
    public PaymentInvoiceApplicationItemApplyRequestType withInvoiceItemId(String invoiceItemId) {
        this.invoiceItemId = invoiceItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxItemId")
    public String taxItemId;
    public PaymentInvoiceApplicationItemApplyRequestType withTaxItemId(String taxItemId) {
        this.taxItemId = taxItemId;
        return this;
    }
}
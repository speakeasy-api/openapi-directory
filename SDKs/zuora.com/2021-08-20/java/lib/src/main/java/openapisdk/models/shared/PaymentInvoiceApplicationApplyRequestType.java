package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentInvoiceApplicationApplyRequestType {
    @JsonProperty("amount")
    public Double amount;
    public PaymentInvoiceApplicationApplyRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PaymentInvoiceApplicationApplyRequestType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PaymentInvoiceApplicationItemApplyRequestType[] items;
    public PaymentInvoiceApplicationApplyRequestType withItems(PaymentInvoiceApplicationItemApplyRequestType[] items) {
        this.items = items;
        return this;
    }
}
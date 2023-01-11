package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentInvoiceApplicationUnapplyRequestType {
    @JsonProperty("amount")
    public Double amount;
    public PaymentInvoiceApplicationUnapplyRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PaymentInvoiceApplicationUnapplyRequestType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PaymentInvoiceApplicationItemUnapplyRequestType[] items;
    public PaymentInvoiceApplicationUnapplyRequestType withItems(PaymentInvoiceApplicationItemUnapplyRequestType[] items) {
        this.items = items;
        return this;
    }
}
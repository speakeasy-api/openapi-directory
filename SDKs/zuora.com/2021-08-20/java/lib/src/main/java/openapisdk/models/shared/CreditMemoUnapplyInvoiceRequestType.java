package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditMemoUnapplyInvoiceRequestType {
    @JsonProperty("amount")
    public Double amount;
    public CreditMemoUnapplyInvoiceRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("invoiceId")
    public String invoiceId;
    public CreditMemoUnapplyInvoiceRequestType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CreditMemoUnapplyInvoiceItemRequestType[] items;
    public CreditMemoUnapplyInvoiceRequestType withItems(CreditMemoUnapplyInvoiceItemRequestType[] items) {
        this.items = items;
        return this;
    }
}
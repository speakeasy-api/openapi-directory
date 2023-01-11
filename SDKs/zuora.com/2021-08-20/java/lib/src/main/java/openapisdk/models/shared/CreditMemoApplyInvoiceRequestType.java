package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditMemoApplyInvoiceRequestType {
    @JsonProperty("amount")
    public Double amount;
    public CreditMemoApplyInvoiceRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("invoiceId")
    public String invoiceId;
    public CreditMemoApplyInvoiceRequestType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CreditMemoApplyInvoiceItemRequestType[] items;
    public CreditMemoApplyInvoiceRequestType withItems(CreditMemoApplyInvoiceItemRequestType[] items) {
        this.items = items;
        return this;
    }
}
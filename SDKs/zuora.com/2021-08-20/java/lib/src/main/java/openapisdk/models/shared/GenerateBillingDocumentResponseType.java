package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateBillingDocumentResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemos")
    public CreditMemoResponseType[] creditMemos;
    public GenerateBillingDocumentResponseType withCreditMemos(CreditMemoResponseType[] creditMemos) {
        this.creditMemos = creditMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public InvoiceResponseType[] invoices;
    public GenerateBillingDocumentResponseType withInvoices(InvoiceResponseType[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GenerateBillingDocumentResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
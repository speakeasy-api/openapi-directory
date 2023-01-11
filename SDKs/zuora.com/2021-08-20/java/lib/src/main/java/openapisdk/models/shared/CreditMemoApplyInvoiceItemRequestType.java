package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditMemoApplyInvoiceItemRequestType {
    @JsonProperty("amount")
    public Double amount;
    public CreditMemoApplyInvoiceItemRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoItemId")
    public String creditMemoItemId;
    public CreditMemoApplyInvoiceItemRequestType withCreditMemoItemId(String creditMemoItemId) {
        this.creditMemoItemId = creditMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTaxItemId")
    public String creditTaxItemId;
    public CreditMemoApplyInvoiceItemRequestType withCreditTaxItemId(String creditTaxItemId) {
        this.creditTaxItemId = creditTaxItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItemId")
    public String invoiceItemId;
    public CreditMemoApplyInvoiceItemRequestType withInvoiceItemId(String invoiceItemId) {
        this.invoiceItemId = invoiceItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxItemId")
    public String taxItemId;
    public CreditMemoApplyInvoiceItemRequestType withTaxItemId(String taxItemId) {
        this.taxItemId = taxItemId;
        return this;
    }
}
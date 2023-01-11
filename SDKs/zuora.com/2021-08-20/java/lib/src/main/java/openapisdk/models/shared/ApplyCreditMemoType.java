package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplyCreditMemoType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemos")
    public CreditMemoApplyDebitMemoRequestType[] debitMemos;
    public ApplyCreditMemoType withDebitMemos(CreditMemoApplyDebitMemoRequestType[] debitMemos) {
        this.debitMemos = debitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public ApplyCreditMemoType withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public CreditMemoApplyInvoiceRequestType[] invoices;
    public ApplyCreditMemoType withInvoices(CreditMemoApplyInvoiceRequestType[] invoices) {
        this.invoices = invoices;
        return this;
    }
}
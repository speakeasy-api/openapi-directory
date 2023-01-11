package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnapplyCreditMemoType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemos")
    public CreditMemoUnapplyDebitMemoRequestType[] debitMemos;
    public UnapplyCreditMemoType withDebitMemos(CreditMemoUnapplyDebitMemoRequestType[] debitMemos) {
        this.debitMemos = debitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public UnapplyCreditMemoType withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public CreditMemoUnapplyInvoiceRequestType[] invoices;
    public UnapplyCreditMemoType withInvoices(CreditMemoUnapplyInvoiceRequestType[] invoices) {
        this.invoices = invoices;
        return this;
    }
}
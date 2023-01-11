package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplyPaymentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemos")
    public PaymentDebitMemoApplicationApplyRequestType[] debitMemos;
    public ApplyPaymentType withDebitMemos(PaymentDebitMemoApplicationApplyRequestType[] debitMemos) {
        this.debitMemos = debitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public ApplyPaymentType withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public PaymentInvoiceApplicationApplyRequestType[] invoices;
    public ApplyPaymentType withInvoices(PaymentInvoiceApplicationApplyRequestType[] invoices) {
        this.invoices = invoices;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnapplyPaymentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemos")
    public PaymentDebitMemoApplicationUnapplyRequestType[] debitMemos;
    public UnapplyPaymentType withDebitMemos(PaymentDebitMemoApplicationUnapplyRequestType[] debitMemos) {
        this.debitMemos = debitMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public UnapplyPaymentType withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public PaymentInvoiceApplicationUnapplyRequestType[] invoices;
    public UnapplyPaymentType withInvoices(PaymentInvoiceApplicationUnapplyRequestType[] invoices) {
        this.invoices = invoices;
        return this;
    }
}
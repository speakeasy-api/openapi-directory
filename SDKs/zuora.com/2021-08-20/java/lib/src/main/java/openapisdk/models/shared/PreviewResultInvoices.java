package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewResultInvoices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PreviewResultInvoices withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountWithoutTax")
    public Double amountWithoutTax;
    public PreviewResultInvoices withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItems")
    public InvoiceItemPreviewResult[] invoiceItems;
    public PreviewResultInvoices withInvoiceItems(InvoiceItemPreviewResult[] invoiceItems) {
        this.invoiceItems = invoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PreviewResultInvoices withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public PreviewResultInvoices withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}
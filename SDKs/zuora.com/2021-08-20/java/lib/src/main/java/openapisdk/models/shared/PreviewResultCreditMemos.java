package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewResultCreditMemos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PreviewResultCreditMemos withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountWithoutTax")
    public Double amountWithoutTax;
    public PreviewResultCreditMemos withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoItems")
    public InvoiceItemPreviewResult[] creditMemoItems;
    public PreviewResultCreditMemos withCreditMemoItems(InvoiceItemPreviewResult[] creditMemoItems) {
        this.creditMemoItems = creditMemoItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PreviewResultCreditMemos withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public PreviewResultCreditMemos withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}
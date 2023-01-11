package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSubscriptionPreviewResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PostSubscriptionPreviewResponseType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountWithoutTax")
    public Double amountWithoutTax;
    public PostSubscriptionPreviewResponseType withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeMetrics")
    public PostSubscriptionPreviewResponseTypeChargeMetrics chargeMetrics;
    public PostSubscriptionPreviewResponseType withChargeMetrics(PostSubscriptionPreviewResponseTypeChargeMetrics chargeMetrics) {
        this.chargeMetrics = chargeMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractedMrr")
    public Double contractedMrr;
    public PostSubscriptionPreviewResponseType withContractedMrr(Double contractedMrr) {
        this.contractedMrr = contractedMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemo")
    public PostSubscriptionPreviewResponseTypeCreditMemo creditMemo;
    public PostSubscriptionPreviewResponseType withCreditMemo(PostSubscriptionPreviewResponseTypeCreditMemo creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public java.util.Map<String, Object> invoice;
    public PostSubscriptionPreviewResponseType withInvoice(java.util.Map<String, Object> invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItems")
    public PostSubscriptionPreviewInvoiceItemsType[] invoiceItems;
    public PostSubscriptionPreviewResponseType withInvoiceItems(PostSubscriptionPreviewInvoiceItemsType[] invoiceItems) {
        this.invoiceItems = invoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public PostSubscriptionPreviewResponseType withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostSubscriptionPreviewResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PostSubscriptionPreviewResponseType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public PostSubscriptionPreviewResponseType withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalContractedValue")
    public Double totalContractedValue;
    public PostSubscriptionPreviewResponseType withTotalContractedValue(Double totalContractedValue) {
        this.totalContractedValue = totalContractedValue;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PutSubscriptionResponseType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountWithoutTax")
    public Double amountWithoutTax;
    public PutSubscriptionResponseType withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeMetrics")
    public PutSubscriptionResponseTypeChargeMetrics chargeMetrics;
    public PutSubscriptionResponseType withChargeMetrics(PutSubscriptionResponseTypeChargeMetrics chargeMetrics) {
        this.chargeMetrics = chargeMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemo")
    public PutSubscriptionResponseTypeCreditMemo creditMemo;
    public PutSubscriptionResponseType withCreditMemo(PutSubscriptionResponseTypeCreditMemo creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public PutSubscriptionResponseType withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public java.util.Map<String, Object> invoice;
    public PutSubscriptionResponseType withInvoice(java.util.Map<String, Object> invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PutSubscriptionResponseType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItems")
    public PutSubscriptionPreviewInvoiceItemsType[] invoiceItems;
    public PutSubscriptionResponseType withInvoiceItems(PutSubscriptionPreviewInvoiceItemsType[] invoiceItems) {
        this.invoiceItems = invoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public PutSubscriptionResponseType withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidAmount")
    public Double paidAmount;
    public PutSubscriptionResponseType withPaidAmount(Double paidAmount) {
        this.paidAmount = paidAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PutSubscriptionResponseType withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public PutSubscriptionResponseType withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutSubscriptionResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PutSubscriptionResponseType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public PutSubscriptionResponseType withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDeltaMrr")
    public Double totalDeltaMrr;
    public PutSubscriptionResponseType withTotalDeltaMrr(Double totalDeltaMrr) {
        this.totalDeltaMrr = totalDeltaMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDeltaTcv")
    public Double totalDeltaTcv;
    public PutSubscriptionResponseType withTotalDeltaTcv(Double totalDeltaTcv) {
        this.totalDeltaTcv = totalDeltaTcv;
        return this;
    }
}
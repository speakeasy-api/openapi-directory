package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSubscriptionCancellationResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelledDate")
    public LocalDate cancelledDate;
    public PostSubscriptionCancellationResponseType withCancelledDate(LocalDate cancelledDate) {
        this.cancelledDate = cancelledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public PostSubscriptionCancellationResponseType withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PostSubscriptionCancellationResponseType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidAmount")
    public Double paidAmount;
    public PostSubscriptionCancellationResponseType withPaidAmount(Double paidAmount) {
        this.paidAmount = paidAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PostSubscriptionCancellationResponseType withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public PostSubscriptionCancellationResponseType withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostSubscriptionCancellationResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDeltaMrr")
    public Double totalDeltaMrr;
    public PostSubscriptionCancellationResponseType withTotalDeltaMrr(Double totalDeltaMrr) {
        this.totalDeltaMrr = totalDeltaMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDeltaTcv")
    public Double totalDeltaTcv;
    public PostSubscriptionCancellationResponseType withTotalDeltaTcv(Double totalDeltaTcv) {
        this.totalDeltaTcv = totalDeltaTcv;
        return this;
    }
}
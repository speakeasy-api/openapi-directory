package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionSuspendResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public PutSubscriptionSuspendResponseType withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PutSubscriptionSuspendResponseType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidAmount")
    public Double paidAmount;
    public PutSubscriptionSuspendResponseType withPaidAmount(Double paidAmount) {
        this.paidAmount = paidAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PutSubscriptionSuspendResponseType withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumeDate")
    public LocalDate resumeDate;
    public PutSubscriptionSuspendResponseType withResumeDate(LocalDate resumeDate) {
        this.resumeDate = resumeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public PutSubscriptionSuspendResponseType withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutSubscriptionSuspendResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendDate")
    public LocalDate suspendDate;
    public PutSubscriptionSuspendResponseType withSuspendDate(LocalDate suspendDate) {
        this.suspendDate = suspendDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termEndDate")
    public LocalDate termEndDate;
    public PutSubscriptionSuspendResponseType withTermEndDate(LocalDate termEndDate) {
        this.termEndDate = termEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDeltaTcv")
    public Double totalDeltaTcv;
    public PutSubscriptionSuspendResponseType withTotalDeltaTcv(Double totalDeltaTcv) {
        this.totalDeltaTcv = totalDeltaTcv;
        return this;
    }
}
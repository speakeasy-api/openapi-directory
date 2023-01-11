package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRenewSubscriptionResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public PutRenewSubscriptionResponseType withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PutRenewSubscriptionResponseType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidAmount")
    public Double paidAmount;
    public PutRenewSubscriptionResponseType withPaidAmount(Double paidAmount) {
        this.paidAmount = paidAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PutRenewSubscriptionResponseType withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutRenewSubscriptionResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termEndDate")
    public LocalDate termEndDate;
    public PutRenewSubscriptionResponseType withTermEndDate(LocalDate termEndDate) {
        this.termEndDate = termEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termStartDate")
    public LocalDate termStartDate;
    public PutRenewSubscriptionResponseType withTermStartDate(LocalDate termStartDate) {
        this.termStartDate = termStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDeltaMrr")
    public Double totalDeltaMrr;
    public PutRenewSubscriptionResponseType withTotalDeltaMrr(Double totalDeltaMrr) {
        this.totalDeltaMrr = totalDeltaMrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDeltaTcv")
    public Double totalDeltaTcv;
    public PutRenewSubscriptionResponseType withTotalDeltaTcv(Double totalDeltaTcv) {
        this.totalDeltaTcv = totalDeltaTcv;
        return this;
    }
}
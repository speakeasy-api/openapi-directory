package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PostPaymentRunRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PostPaymentRunRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public PostPaymentRunRequest withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoApplyCreditMemo")
    public Boolean autoApplyCreditMemo;
    public PostPaymentRunRequest withAutoApplyCreditMemo(Boolean autoApplyCreditMemo) {
        this.autoApplyCreditMemo = autoApplyCreditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoApplyUnappliedPayment")
    public Boolean autoApplyUnappliedPayment;
    public PostPaymentRunRequest withAutoApplyUnappliedPayment(Boolean autoApplyUnappliedPayment) {
        this.autoApplyUnappliedPayment = autoApplyUnappliedPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch")
    public String batch;
    public PostPaymentRunRequest withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public String billCycleDay;
    public PostPaymentRunRequest withBillCycleDay(String billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingRunId")
    public String billingRunId;
    public PostPaymentRunRequest withBillingRunId(String billingRunId) {
        this.billingRunId = billingRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectPayment")
    public Boolean collectPayment;
    public PostPaymentRunRequest withCollectPayment(Boolean collectPayment) {
        this.collectPayment = collectPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consolidatedPayment")
    public Boolean consolidatedPayment;
    public PostPaymentRunRequest withConsolidatedPayment(Boolean consolidatedPayment) {
        this.consolidatedPayment = consolidatedPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public PostPaymentRunRequest withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public PostPaymentRunDataElementRequest[] data;
    public PostPaymentRunRequest withData(PostPaymentRunDataElementRequest[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayId")
    public String paymentGatewayId;
    public PostPaymentRunRequest withPaymentGatewayId(String paymentGatewayId) {
        this.paymentGatewayId = paymentGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processPaymentWithClosedPM")
    public Boolean processPaymentWithClosedPM;
    public PostPaymentRunRequest withProcessPaymentWithClosedPm(Boolean processPaymentWithClosedPM) {
        this.processPaymentWithClosedPM = processPaymentWithClosedPM;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("runDate")
    public OffsetDateTime runDate;
    public PostPaymentRunRequest withRunDate(OffsetDateTime runDate) {
        this.runDate = runDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PostPaymentRunRequest withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}
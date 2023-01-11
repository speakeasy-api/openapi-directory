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

public class PutPaymentRunRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PutPaymentRunRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public PutPaymentRunRequest withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoApplyCreditMemo")
    public Boolean autoApplyCreditMemo;
    public PutPaymentRunRequest withAutoApplyCreditMemo(Boolean autoApplyCreditMemo) {
        this.autoApplyCreditMemo = autoApplyCreditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoApplyUnappliedPayment")
    public Boolean autoApplyUnappliedPayment;
    public PutPaymentRunRequest withAutoApplyUnappliedPayment(Boolean autoApplyUnappliedPayment) {
        this.autoApplyUnappliedPayment = autoApplyUnappliedPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch")
    public String batch;
    public PutPaymentRunRequest withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public String billCycleDay;
    public PutPaymentRunRequest withBillCycleDay(String billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingRunId")
    public String billingRunId;
    public PutPaymentRunRequest withBillingRunId(String billingRunId) {
        this.billingRunId = billingRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectPayment")
    public Boolean collectPayment;
    public PutPaymentRunRequest withCollectPayment(Boolean collectPayment) {
        this.collectPayment = collectPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consolidatedPayment")
    public Boolean consolidatedPayment;
    public PutPaymentRunRequest withConsolidatedPayment(Boolean consolidatedPayment) {
        this.consolidatedPayment = consolidatedPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public PutPaymentRunRequest withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayId")
    public String paymentGatewayId;
    public PutPaymentRunRequest withPaymentGatewayId(String paymentGatewayId) {
        this.paymentGatewayId = paymentGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processPaymentWithClosedPM")
    public Boolean processPaymentWithClosedPM;
    public PutPaymentRunRequest withProcessPaymentWithClosedPm(Boolean processPaymentWithClosedPM) {
        this.processPaymentWithClosedPM = processPaymentWithClosedPM;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("runDate")
    public OffsetDateTime runDate;
    public PutPaymentRunRequest withRunDate(OffsetDateTime runDate) {
        this.runDate = runDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PutPaymentRunRequest withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}
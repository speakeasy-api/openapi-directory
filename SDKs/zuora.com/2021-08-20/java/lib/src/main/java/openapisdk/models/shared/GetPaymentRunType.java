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

public class GetPaymentRunType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public GetPaymentRunType withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public GetPaymentRunType withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoApplyCreditMemo")
    public Boolean autoApplyCreditMemo;
    public GetPaymentRunType withAutoApplyCreditMemo(Boolean autoApplyCreditMemo) {
        this.autoApplyCreditMemo = autoApplyCreditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoApplyUnappliedPayment")
    public Boolean autoApplyUnappliedPayment;
    public GetPaymentRunType withAutoApplyUnappliedPayment(Boolean autoApplyUnappliedPayment) {
        this.autoApplyUnappliedPayment = autoApplyUnappliedPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch")
    public String batch;
    public GetPaymentRunType withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public String billCycleDay;
    public GetPaymentRunType withBillCycleDay(String billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingRunId")
    public String billingRunId;
    public GetPaymentRunType withBillingRunId(String billingRunId) {
        this.billingRunId = billingRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectPayment")
    public Boolean collectPayment;
    public GetPaymentRunType withCollectPayment(Boolean collectPayment) {
        this.collectPayment = collectPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completedOn")
    public OffsetDateTime completedOn;
    public GetPaymentRunType withCompletedOn(OffsetDateTime completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consolidatedPayment")
    public Boolean consolidatedPayment;
    public GetPaymentRunType withConsolidatedPayment(Boolean consolidatedPayment) {
        this.consolidatedPayment = consolidatedPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public GetPaymentRunType withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public GetPaymentRunType withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetPaymentRunType withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("executedOn")
    public OffsetDateTime executedOn;
    public GetPaymentRunType withExecutedOn(OffsetDateTime executedOn) {
        this.executedOn = executedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPaymentRunType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public GetPaymentRunType withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayId")
    public String paymentGatewayId;
    public GetPaymentRunType withPaymentGatewayId(String paymentGatewayId) {
        this.paymentGatewayId = paymentGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processPaymentWithClosedPM")
    public Boolean processPaymentWithClosedPM;
    public GetPaymentRunType withProcessPaymentWithClosedPm(Boolean processPaymentWithClosedPM) {
        this.processPaymentWithClosedPM = processPaymentWithClosedPM;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("runDate")
    public OffsetDateTime runDate;
    public GetPaymentRunType withRunDate(OffsetDateTime runDate) {
        this.runDate = runDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetPaymentRunTypeStatusEnum status;
    public GetPaymentRunType withStatus(GetPaymentRunTypeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentRunType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public GetPaymentRunType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public GetPaymentRunType withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public GetPaymentRunType withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}
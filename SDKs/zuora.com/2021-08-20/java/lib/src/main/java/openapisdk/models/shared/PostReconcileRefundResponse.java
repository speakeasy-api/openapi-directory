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

public class PostReconcileRefundResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PostReconcileRefundResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PostReconcileRefundResponse withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("cancelledOn")
    public OffsetDateTime cancelledOn;
    public PostReconcileRefundResponse withCancelledOn(OffsetDateTime cancelledOn) {
        this.cancelledOn = cancelledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public PostReconcileRefundResponse withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public PostReconcileRefundResponse withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public PostReconcileRefundResponse withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public PostReconcileRefundResponse withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("financeInformation")
    public PostReconcileRefundResponseFinanceInformation financeInformation;
    public PostReconcileRefundResponse withFinanceInformation(PostReconcileRefundResponseFinanceInformation financeInformation) {
        this.financeInformation = financeInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public PostReconcileRefundResponse withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayReconciliationReason")
    public String gatewayReconciliationReason;
    public PostReconcileRefundResponse withGatewayReconciliationReason(String gatewayReconciliationReason) {
        this.gatewayReconciliationReason = gatewayReconciliationReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayReconciliationStatus")
    public String gatewayReconciliationStatus;
    public PostReconcileRefundResponse withGatewayReconciliationStatus(String gatewayReconciliationStatus) {
        this.gatewayReconciliationStatus = gatewayReconciliationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponse")
    public String gatewayResponse;
    public PostReconcileRefundResponse withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponseCode")
    public String gatewayResponseCode;
    public PostReconcileRefundResponse withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayState")
    public PostReconcileRefundResponseGatewayStateEnum gatewayState;
    public PostReconcileRefundResponse withGatewayState(PostReconcileRefundResponseGatewayStateEnum gatewayState) {
        this.gatewayState = gatewayState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostReconcileRefundResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("markedForSubmissionOn")
    public OffsetDateTime markedForSubmissionOn;
    public PostReconcileRefundResponse withMarkedForSubmissionOn(OffsetDateTime markedForSubmissionOn) {
        this.markedForSubmissionOn = markedForSubmissionOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodType")
    public PostReconcileRefundResponseMethodTypeEnum methodType;
    public PostReconcileRefundResponse withMethodType(PostReconcileRefundResponseMethodTypeEnum methodType) {
        this.methodType = methodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostReconcileRefundResponse withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PostReconcileRefundResponse withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostReconcileRefundResponse withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodSnapshotId")
    public String paymentMethodSnapshotId;
    public PostReconcileRefundResponse withPaymentMethodSnapshotId(String paymentMethodSnapshotId) {
        this.paymentMethodSnapshotId = paymentMethodSnapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutId")
    public String payoutId;
    public PostReconcileRefundResponse withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public PostReconcileRefundResponse withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public PostReconcileRefundResponse withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundDate")
    public LocalDate refundDate;
    public PostReconcileRefundResponse withRefundDate(LocalDate refundDate) {
        this.refundDate = refundDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("refundTransactionTime")
    public OffsetDateTime refundTransactionTime;
    public PostReconcileRefundResponse withRefundTransactionTime(OffsetDateTime refundTransactionTime) {
        this.refundTransactionTime = refundTransactionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondRefundReferenceId")
    public String secondRefundReferenceId;
    public PostReconcileRefundResponse withSecondRefundReferenceId(String secondRefundReferenceId) {
        this.secondRefundReferenceId = secondRefundReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("settledOn")
    public OffsetDateTime settledOn;
    public PostReconcileRefundResponse withSettledOn(OffsetDateTime settledOn) {
        this.settledOn = settledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptor")
    public String softDescriptor;
    public PostReconcileRefundResponse withSoftDescriptor(String softDescriptor) {
        this.softDescriptor = softDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptorPhone")
    public String softDescriptorPhone;
    public PostReconcileRefundResponse withSoftDescriptorPhone(String softDescriptorPhone) {
        this.softDescriptorPhone = softDescriptorPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PostReconcileRefundResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("submittedOn")
    public OffsetDateTime submittedOn;
    public PostReconcileRefundResponse withSubmittedOn(OffsetDateTime submittedOn) {
        this.submittedOn = submittedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostReconcileRefundResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostReconcileRefundResponseTypeEnum type;
    public PostReconcileRefundResponse withType(PostReconcileRefundResponseTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public PostReconcileRefundResponse withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public PostReconcileRefundResponse withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}
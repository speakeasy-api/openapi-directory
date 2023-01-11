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

public class PostRejectPaymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PostRejectPaymentResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PostRejectPaymentResponse withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("cancelledOn")
    public OffsetDateTime cancelledOn;
    public PostRejectPaymentResponse withCancelledOn(OffsetDateTime cancelledOn) {
        this.cancelledOn = cancelledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public PostRejectPaymentResponse withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public PostRejectPaymentResponse withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public PostRejectPaymentResponse withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public PostRejectPaymentResponse withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("financeInformation")
    public PostRejectPaymentResponseFinanceInformation financeInformation;
    public PostRejectPaymentResponse withFinanceInformation(PostRejectPaymentResponseFinanceInformation financeInformation) {
        this.financeInformation = financeInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public PostRejectPaymentResponse withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponse")
    public String gatewayResponse;
    public PostRejectPaymentResponse withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponseCode")
    public String gatewayResponseCode;
    public PostRejectPaymentResponse withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayState")
    public PostRejectPaymentResponseGatewayStateEnum gatewayState;
    public PostRejectPaymentResponse withGatewayState(PostRejectPaymentResponseGatewayStateEnum gatewayState) {
        this.gatewayState = gatewayState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostRejectPaymentResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("markedForSubmissionOn")
    public OffsetDateTime markedForSubmissionOn;
    public PostRejectPaymentResponse withMarkedForSubmissionOn(OffsetDateTime markedForSubmissionOn) {
        this.markedForSubmissionOn = markedForSubmissionOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodType")
    public PostRejectPaymentResponseMethodTypeEnum methodType;
    public PostRejectPaymentResponse withMethodType(PostRejectPaymentResponseMethodTypeEnum methodType) {
        this.methodType = methodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostRejectPaymentResponse withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PostRejectPaymentResponse withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostRejectPaymentResponse withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodSnapshotId")
    public String paymentMethodSnapshotId;
    public PostRejectPaymentResponse withPaymentMethodSnapshotId(String paymentMethodSnapshotId) {
        this.paymentMethodSnapshotId = paymentMethodSnapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public PostRejectPaymentResponse withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public PostRejectPaymentResponse withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundDate")
    public LocalDate refundDate;
    public PostRejectPaymentResponse withRefundDate(LocalDate refundDate) {
        this.refundDate = refundDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("refundTransactionTime")
    public OffsetDateTime refundTransactionTime;
    public PostRejectPaymentResponse withRefundTransactionTime(OffsetDateTime refundTransactionTime) {
        this.refundTransactionTime = refundTransactionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondRefundReferenceId")
    public String secondRefundReferenceId;
    public PostRejectPaymentResponse withSecondRefundReferenceId(String secondRefundReferenceId) {
        this.secondRefundReferenceId = secondRefundReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("settledOn")
    public OffsetDateTime settledOn;
    public PostRejectPaymentResponse withSettledOn(OffsetDateTime settledOn) {
        this.settledOn = settledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptor")
    public String softDescriptor;
    public PostRejectPaymentResponse withSoftDescriptor(String softDescriptor) {
        this.softDescriptor = softDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptorPhone")
    public String softDescriptorPhone;
    public PostRejectPaymentResponse withSoftDescriptorPhone(String softDescriptorPhone) {
        this.softDescriptorPhone = softDescriptorPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PostRejectPaymentResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("submittedOn")
    public OffsetDateTime submittedOn;
    public PostRejectPaymentResponse withSubmittedOn(OffsetDateTime submittedOn) {
        this.submittedOn = submittedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostRejectPaymentResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostRejectPaymentResponseTypeEnum type;
    public PostRejectPaymentResponse withType(PostRejectPaymentResponseTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public PostRejectPaymentResponse withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public PostRejectPaymentResponse withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}
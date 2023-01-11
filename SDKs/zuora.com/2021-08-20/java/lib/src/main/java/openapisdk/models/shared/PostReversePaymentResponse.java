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

public class PostReversePaymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PostReversePaymentResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PostReversePaymentResponse withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("cancelledOn")
    public OffsetDateTime cancelledOn;
    public PostReversePaymentResponse withCancelledOn(OffsetDateTime cancelledOn) {
        this.cancelledOn = cancelledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public PostReversePaymentResponse withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public PostReversePaymentResponse withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public PostReversePaymentResponse withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public PostReversePaymentResponse withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("financeInformation")
    public PostReversePaymentResponseFinanceInformation financeInformation;
    public PostReversePaymentResponse withFinanceInformation(PostReversePaymentResponseFinanceInformation financeInformation) {
        this.financeInformation = financeInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public PostReversePaymentResponse withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponse")
    public String gatewayResponse;
    public PostReversePaymentResponse withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponseCode")
    public String gatewayResponseCode;
    public PostReversePaymentResponse withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayState")
    public PostReversePaymentResponseGatewayStateEnum gatewayState;
    public PostReversePaymentResponse withGatewayState(PostReversePaymentResponseGatewayStateEnum gatewayState) {
        this.gatewayState = gatewayState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostReversePaymentResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("markedForSubmissionOn")
    public OffsetDateTime markedForSubmissionOn;
    public PostReversePaymentResponse withMarkedForSubmissionOn(OffsetDateTime markedForSubmissionOn) {
        this.markedForSubmissionOn = markedForSubmissionOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodType")
    public PostReversePaymentResponseMethodTypeEnum methodType;
    public PostReversePaymentResponse withMethodType(PostReversePaymentResponseMethodTypeEnum methodType) {
        this.methodType = methodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostReversePaymentResponse withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PostReversePaymentResponse withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostReversePaymentResponse withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodSnapshotId")
    public String paymentMethodSnapshotId;
    public PostReversePaymentResponse withPaymentMethodSnapshotId(String paymentMethodSnapshotId) {
        this.paymentMethodSnapshotId = paymentMethodSnapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public PostReversePaymentResponse withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public PostReversePaymentResponse withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundDate")
    public LocalDate refundDate;
    public PostReversePaymentResponse withRefundDate(LocalDate refundDate) {
        this.refundDate = refundDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("refundTransactionTime")
    public OffsetDateTime refundTransactionTime;
    public PostReversePaymentResponse withRefundTransactionTime(OffsetDateTime refundTransactionTime) {
        this.refundTransactionTime = refundTransactionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondRefundReferenceId")
    public String secondRefundReferenceId;
    public PostReversePaymentResponse withSecondRefundReferenceId(String secondRefundReferenceId) {
        this.secondRefundReferenceId = secondRefundReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("settledOn")
    public OffsetDateTime settledOn;
    public PostReversePaymentResponse withSettledOn(OffsetDateTime settledOn) {
        this.settledOn = settledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptor")
    public String softDescriptor;
    public PostReversePaymentResponse withSoftDescriptor(String softDescriptor) {
        this.softDescriptor = softDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptorPhone")
    public String softDescriptorPhone;
    public PostReversePaymentResponse withSoftDescriptorPhone(String softDescriptorPhone) {
        this.softDescriptorPhone = softDescriptorPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PostReversePaymentResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("submittedOn")
    public OffsetDateTime submittedOn;
    public PostReversePaymentResponse withSubmittedOn(OffsetDateTime submittedOn) {
        this.submittedOn = submittedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostReversePaymentResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostReversePaymentResponseTypeEnum type;
    public PostReversePaymentResponse withType(PostReversePaymentResponseTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public PostReversePaymentResponse withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public PostReversePaymentResponse withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PostSettlePaymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PostSettlePaymentResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PostSettlePaymentResponse withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedAmount")
    public Double appliedAmount;
    public PostSettlePaymentResponse withAppliedAmount(Double appliedAmount) {
        this.appliedAmount = appliedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authTransactionId")
    public String authTransactionId;
    public PostSettlePaymentResponse withAuthTransactionId(String authTransactionId) {
        this.authTransactionId = authTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankIdentificationNumber")
    public String bankIdentificationNumber;
    public PostSettlePaymentResponse withBankIdentificationNumber(String bankIdentificationNumber) {
        this.bankIdentificationNumber = bankIdentificationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("cancelledOn")
    public OffsetDateTime cancelledOn;
    public PostSettlePaymentResponse withCancelledOn(OffsetDateTime cancelledOn) {
        this.cancelledOn = cancelledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public PostSettlePaymentResponse withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public PostSettlePaymentResponse withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public PostSettlePaymentResponse withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditBalanceAmount")
    public Double creditBalanceAmount;
    public PostSettlePaymentResponse withCreditBalanceAmount(Double creditBalanceAmount) {
        this.creditBalanceAmount = creditBalanceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public PostSettlePaymentResponse withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("effectiveDate")
    public OffsetDateTime effectiveDate;
    public PostSettlePaymentResponse withEffectiveDate(OffsetDateTime effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("financeInformation")
    public PostSettlePaymentResponseFinanceInformation financeInformation;
    public PostSettlePaymentResponse withFinanceInformation(PostSettlePaymentResponseFinanceInformation financeInformation) {
        this.financeInformation = financeInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public PostSettlePaymentResponse withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayOrderId")
    public String gatewayOrderId;
    public PostSettlePaymentResponse withGatewayOrderId(String gatewayOrderId) {
        this.gatewayOrderId = gatewayOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponse")
    public String gatewayResponse;
    public PostSettlePaymentResponse withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponseCode")
    public String gatewayResponseCode;
    public PostSettlePaymentResponse withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayState")
    public PostSettlePaymentResponseGatewayStateEnum gatewayState;
    public PostSettlePaymentResponse withGatewayState(PostSettlePaymentResponseGatewayStateEnum gatewayState) {
        this.gatewayState = gatewayState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostSettlePaymentResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("markedForSubmissionOn")
    public OffsetDateTime markedForSubmissionOn;
    public PostSettlePaymentResponse withMarkedForSubmissionOn(OffsetDateTime markedForSubmissionOn) {
        this.markedForSubmissionOn = markedForSubmissionOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostSettlePaymentResponse withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostSettlePaymentResponse withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodSnapshotId")
    public String paymentMethodSnapshotId;
    public PostSettlePaymentResponse withPaymentMethodSnapshotId(String paymentMethodSnapshotId) {
        this.paymentMethodSnapshotId = paymentMethodSnapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public PostSettlePaymentResponse withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundAmount")
    public Double refundAmount;
    public PostSettlePaymentResponse withRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondPaymentReferenceId")
    public String secondPaymentReferenceId;
    public PostSettlePaymentResponse withSecondPaymentReferenceId(String secondPaymentReferenceId) {
        this.secondPaymentReferenceId = secondPaymentReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("settledOn")
    public OffsetDateTime settledOn;
    public PostSettlePaymentResponse withSettledOn(OffsetDateTime settledOn) {
        this.settledOn = settledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptor")
    public String softDescriptor;
    public PostSettlePaymentResponse withSoftDescriptor(String softDescriptor) {
        this.softDescriptor = softDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptorPhone")
    public String softDescriptorPhone;
    public PostSettlePaymentResponse withSoftDescriptorPhone(String softDescriptorPhone) {
        this.softDescriptorPhone = softDescriptorPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PostSettlePaymentResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("submittedOn")
    public OffsetDateTime submittedOn;
    public PostSettlePaymentResponse withSubmittedOn(OffsetDateTime submittedOn) {
        this.submittedOn = submittedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostSettlePaymentResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostSettlePaymentResponseTypeEnum type;
    public PostSettlePaymentResponse withType(PostSettlePaymentResponseTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedAmount")
    public Double unappliedAmount;
    public PostSettlePaymentResponse withUnappliedAmount(Double unappliedAmount) {
        this.unappliedAmount = unappliedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public PostSettlePaymentResponse withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public PostSettlePaymentResponse withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}
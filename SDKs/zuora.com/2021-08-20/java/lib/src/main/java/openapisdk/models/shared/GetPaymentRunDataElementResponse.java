package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentRunDataElementResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public GetPaymentRunDataElementResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetPaymentRunDataElementResponse withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountCollected")
    public Double amountCollected;
    public GetPaymentRunDataElementResponse withAmountCollected(Double amountCollected) {
        this.amountCollected = amountCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountToCollect")
    public Double amountToCollect;
    public GetPaymentRunDataElementResponse withAmountToCollect(Double amountToCollect) {
        this.amountToCollect = amountToCollect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public GetPaymentRunDataElementResponse withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentId")
    public String documentId;
    public GetPaymentRunDataElementResponse withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentType")
    public GetPaymentRunDataElementResponseDocumentTypeEnum documentType;
    public GetPaymentRunDataElementResponse withDocumentType(GetPaymentRunDataElementResponseDocumentTypeEnum documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public GetPaymentRunDataElementResponse withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public GetPaymentRunDataElementResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayId")
    public String paymentGatewayId;
    public GetPaymentRunDataElementResponse withPaymentGatewayId(String paymentGatewayId) {
        this.paymentGatewayId = paymentGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public GetPaymentRunDataElementResponse withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public GetPaymentRunDataElementResponseResultEnum result;
    public GetPaymentRunDataElementResponse withResult(GetPaymentRunDataElementResponseResultEnum result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public GetPaymentRunDataTransactionElementResponse[] transactions;
    public GetPaymentRunDataElementResponse withTransactions(GetPaymentRunDataTransactionElementResponse[] transactions) {
        this.transactions = transactions;
        return this;
    }
}
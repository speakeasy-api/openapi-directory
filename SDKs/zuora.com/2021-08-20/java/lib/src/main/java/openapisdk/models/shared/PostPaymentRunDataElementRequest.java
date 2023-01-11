package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPaymentRunDataElementRequest {
    @JsonProperty("accountId")
    public String accountId;
    public PostPaymentRunDataElementRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PostPaymentRunDataElementRequest withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public PostPaymentRunDataElementRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentId")
    public String documentId;
    public PostPaymentRunDataElementRequest withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentType")
    public PostPaymentRunDataElementRequestDocumentTypeEnum documentType;
    public PostPaymentRunDataElementRequest withDocumentType(PostPaymentRunDataElementRequestDocumentTypeEnum documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayId")
    public String paymentGatewayId;
    public PostPaymentRunDataElementRequest withPaymentGatewayId(String paymentGatewayId) {
        this.paymentGatewayId = paymentGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public PostPaymentRunDataElementRequest withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
}
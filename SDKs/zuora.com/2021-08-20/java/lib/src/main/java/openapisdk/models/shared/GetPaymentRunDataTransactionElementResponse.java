package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentRunDataTransactionElementResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetPaymentRunDataTransactionElementResponse withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedAmount")
    public Double appliedAmount;
    public GetPaymentRunDataTransactionElementResponse withAppliedAmount(Double appliedAmount) {
        this.appliedAmount = appliedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public GetPaymentRunDataTransactionElementResponse withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public GetPaymentRunDataTransactionElementResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPaymentRunDataTransactionElementResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetPaymentRunDataTransactionElementResponseStatusEnum status;
    public GetPaymentRunDataTransactionElementResponse withStatus(GetPaymentRunDataTransactionElementResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetPaymentRunDataTransactionElementResponseTypeEnum type;
    public GetPaymentRunDataTransactionElementResponse withType(GetPaymentRunDataTransactionElementResponseTypeEnum type) {
        this.type = type;
        return this;
    }
}
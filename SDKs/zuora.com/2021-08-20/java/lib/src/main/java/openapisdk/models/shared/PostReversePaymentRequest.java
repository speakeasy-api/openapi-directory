package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PostReversePaymentRequest {
    @JsonProperty("amount")
    public Double amount;
    public PostReversePaymentRequest withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponse")
    public String gatewayResponse;
    public PostReversePaymentRequest withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponseCode")
    public String gatewayResponseCode;
    public PostReversePaymentRequest withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public PostReversePaymentRequest withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondReferenceId")
    public String secondReferenceId;
    public PostReversePaymentRequest withSecondReferenceId(String secondReferenceId) {
        this.secondReferenceId = secondReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("settledOn")
    public OffsetDateTime settledOn;
    public PostReversePaymentRequest withSettledOn(OffsetDateTime settledOn) {
        this.settledOn = settledOn;
        return this;
    }
}
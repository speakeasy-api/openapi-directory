package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PostRejectPaymentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponse")
    public String gatewayResponse;
    public PostRejectPaymentRequest withGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayResponseCode")
    public String gatewayResponseCode;
    public PostRejectPaymentRequest withGatewayResponseCode(String gatewayResponseCode) {
        this.gatewayResponseCode = gatewayResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public PostRejectPaymentRequest withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondReferenceId")
    public String secondReferenceId;
    public PostRejectPaymentRequest withSecondReferenceId(String secondReferenceId) {
        this.secondReferenceId = secondReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("settledOn")
    public OffsetDateTime settledOn;
    public PostRejectPaymentRequest withSettledOn(OffsetDateTime settledOn) {
        this.settledOn = settledOn;
        return this;
    }
}
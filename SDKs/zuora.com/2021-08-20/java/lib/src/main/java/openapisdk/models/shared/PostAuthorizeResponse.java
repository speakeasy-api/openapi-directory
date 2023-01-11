package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAuthorizeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayOrderId")
    public String gatewayOrderId;
    public PostAuthorizeResponse withGatewayOrderId(String gatewayOrderId) {
        this.gatewayOrderId = gatewayOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultCode")
    public String resultCode;
    public PostAuthorizeResponse withResultCode(String resultCode) {
        this.resultCode = resultCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultMessage")
    public String resultMessage;
    public PostAuthorizeResponse withResultMessage(String resultMessage) {
        this.resultMessage = resultMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostAuthorizeResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public PostAuthorizeResponse withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}
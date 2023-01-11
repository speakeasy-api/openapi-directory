package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVoidAuthorizeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayOrderId")
    public String gatewayOrderId;
    public PostVoidAuthorizeResponse withGatewayOrderId(String gatewayOrderId) {
        this.gatewayOrderId = gatewayOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultCode")
    public String resultCode;
    public PostVoidAuthorizeResponse withResultCode(String resultCode) {
        this.resultCode = resultCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultMessage")
    public String resultMessage;
    public PostVoidAuthorizeResponse withResultMessage(String resultMessage) {
        this.resultMessage = resultMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostVoidAuthorizeResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public PostVoidAuthorizeResponse withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}
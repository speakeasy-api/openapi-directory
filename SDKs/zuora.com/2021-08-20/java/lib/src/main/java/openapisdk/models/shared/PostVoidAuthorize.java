package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVoidAuthorize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PostVoidAuthorize withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PostVoidAuthorize withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("gatewayOrderId")
    public String gatewayOrderId;
    public PostVoidAuthorize withGatewayOrderId(String gatewayOrderId) {
        this.gatewayOrderId = gatewayOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayId")
    public String paymentGatewayId;
    public PostVoidAuthorize withPaymentGatewayId(String paymentGatewayId) {
        this.paymentGatewayId = paymentGatewayId;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public PostVoidAuthorize withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}
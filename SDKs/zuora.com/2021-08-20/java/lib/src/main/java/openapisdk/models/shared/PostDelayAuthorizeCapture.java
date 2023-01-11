package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDelayAuthorizeCapture {
    @JsonProperty("accountId")
    public String accountId;
    public PostDelayAuthorizeCapture withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PostDelayAuthorizeCapture withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("amount")
    public Double amount;
    public PostDelayAuthorizeCapture withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("gatewayOrderId")
    public String gatewayOrderId;
    public PostDelayAuthorizeCapture withGatewayOrderId(String gatewayOrderId) {
        this.gatewayOrderId = gatewayOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mitTransactionSource")
    public PostDelayAuthorizeCaptureMitTransactionSourceEnum mitTransactionSource;
    public PostDelayAuthorizeCapture withMitTransactionSource(PostDelayAuthorizeCaptureMitTransactionSourceEnum mitTransactionSource) {
        this.mitTransactionSource = mitTransactionSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptor")
    public String softDescriptor;
    public PostDelayAuthorizeCapture withSoftDescriptor(String softDescriptor) {
        this.softDescriptor = softDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softDescriptorPhone")
    public String softDescriptorPhone;
    public PostDelayAuthorizeCapture withSoftDescriptorPhone(String softDescriptorPhone) {
        this.softDescriptorPhone = softDescriptorPhone;
        return this;
    }
}
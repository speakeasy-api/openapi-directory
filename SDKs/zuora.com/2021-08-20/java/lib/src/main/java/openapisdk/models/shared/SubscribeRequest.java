package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscribeRequest {
    @JsonProperty("Account")
    public java.util.Map<String, Object> account;
    public SubscribeRequest withAccount(java.util.Map<String, Object> account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillToContact")
    public java.util.Map<String, Object> billToContact;
    public SubscribeRequest withBillToContact(java.util.Map<String, Object> billToContact) {
        this.billToContact = billToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethod")
    public SubscribeRequestPaymentMethod paymentMethod;
    public SubscribeRequest withPaymentMethod(SubscribeRequestPaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviewOptions")
    public SubscribeRequestPreviewOptions previewOptions;
    public SubscribeRequest withPreviewOptions(SubscribeRequestPreviewOptions previewOptions) {
        this.previewOptions = previewOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SoldToContact")
    public java.util.Map<String, Object> soldToContact;
    public SubscribeRequest withSoldToContact(java.util.Map<String, Object> soldToContact) {
        this.soldToContact = soldToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscribeOptions")
    public SubscribeRequestSubscribeOptions subscribeOptions;
    public SubscribeRequest withSubscribeOptions(SubscribeRequestSubscribeOptions subscribeOptions) {
        this.subscribeOptions = subscribeOptions;
        return this;
    }
    @JsonProperty("SubscriptionData")
    public SubscribeRequestSubscriptionData subscriptionData;
    public SubscribeRequest withSubscriptionData(SubscribeRequestSubscriptionData subscriptionData) {
        this.subscriptionData = subscriptionData;
        return this;
    }
}
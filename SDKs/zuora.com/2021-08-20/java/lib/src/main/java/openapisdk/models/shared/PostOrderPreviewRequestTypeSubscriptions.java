package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderPreviewRequestTypeSubscriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PostOrderPreviewRequestTypeSubscriptions withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActions")
    public PreviewOrderOrderAction[] orderActions;
    public PostOrderPreviewRequestTypeSubscriptions withOrderActions(PreviewOrderOrderAction[] orderActions) {
        this.orderActions = orderActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quote")
    public QuoteObjectFields quote;
    public PostOrderPreviewRequestTypeSubscriptions withQuote(QuoteObjectFields quote) {
        this.quote = quote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramp")
    public RampRequest ramp;
    public PostOrderPreviewRequestTypeSubscriptions withRamp(RampRequest ramp) {
        this.ramp = ramp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PostOrderPreviewRequestTypeSubscriptions withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderSubscriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseVersion")
    public Long baseVersion;
    public OrderSubscriptions withBaseVersion(Long baseVersion) {
        this.baseVersion = baseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderSubscriptions withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newVersion")
    public Long newVersion;
    public OrderSubscriptions withNewVersion(Long newVersion) {
        this.newVersion = newVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActions")
    public OrderAction[] orderActions;
    public OrderSubscriptions withOrderActions(OrderAction[] orderActions) {
        this.orderActions = orderActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quote")
    public QuoteObjectFields quote;
    public OrderSubscriptions withQuote(QuoteObjectFields quote) {
        this.quote = quote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramp")
    public java.util.Map<String, Object> ramp;
    public OrderSubscriptions withRamp(java.util.Map<String, Object> ramp) {
        this.ramp = ramp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Long sequence;
    public OrderSubscriptions withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public OrderSubscriptions withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
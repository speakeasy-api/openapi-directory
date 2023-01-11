package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderForEvergreenSubscriptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseVersion")
    public Long baseVersion;
    public OrderForEvergreenSubscriptions withBaseVersion(Long baseVersion) {
        this.baseVersion = baseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderForEvergreenSubscriptions withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newVersion")
    public Long newVersion;
    public OrderForEvergreenSubscriptions withNewVersion(Long newVersion) {
        this.newVersion = newVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActions")
    public OrderActionForEvergreen[] orderActions;
    public OrderForEvergreenSubscriptions withOrderActions(OrderActionForEvergreen[] orderActions) {
        this.orderActions = orderActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quote")
    public QuoteObjectFields quote;
    public OrderForEvergreenSubscriptions withQuote(QuoteObjectFields quote) {
        this.quote = quote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Long sequence;
    public OrderForEvergreenSubscriptions withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public OrderForEvergreenSubscriptions withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}
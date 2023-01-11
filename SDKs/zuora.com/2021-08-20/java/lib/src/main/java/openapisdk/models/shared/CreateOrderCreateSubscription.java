package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderCreateSubscription
 * Information about an order action of type `CreateSubscription`.
 * 
**/
public class CreateOrderCreateSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSeparately")
    public Boolean invoiceSeparately;
    public CreateOrderCreateSubscription withInvoiceSeparately(Boolean invoiceSeparately) {
        this.invoiceSeparately = invoiceSeparately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriptionOwnerAccount")
    public java.util.Map<String, String> newSubscriptionOwnerAccount;
    public CreateOrderCreateSubscription withNewSubscriptionOwnerAccount(java.util.Map<String, String> newSubscriptionOwnerAccount) {
        this.newSubscriptionOwnerAccount = newSubscriptionOwnerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CreateOrderCreateSubscription withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribeToRatePlans")
    public CreateOrderRatePlanOverride[] subscribeToRatePlans;
    public CreateOrderCreateSubscription withSubscribeToRatePlans(CreateOrderRatePlanOverride[] subscribeToRatePlans) {
        this.subscribeToRatePlans = subscribeToRatePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public CreateOrderCreateSubscription withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwnerAccountNumber")
    public String subscriptionOwnerAccountNumber;
    public CreateOrderCreateSubscription withSubscriptionOwnerAccountNumber(String subscriptionOwnerAccountNumber) {
        this.subscriptionOwnerAccountNumber = subscriptionOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public CreateOrderCreateSubscriptionTerms terms;
    public CreateOrderCreateSubscription withTerms(CreateOrderCreateSubscriptionTerms terms) {
        this.terms = terms;
        return this;
    }
}
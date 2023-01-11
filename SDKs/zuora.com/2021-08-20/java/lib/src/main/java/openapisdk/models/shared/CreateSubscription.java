package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscription
 * Information about an order action of type `CreateSubscription`.
 * 
**/
public class CreateSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSeparately")
    public Boolean invoiceSeparately;
    public CreateSubscription withInvoiceSeparately(Boolean invoiceSeparately) {
        this.invoiceSeparately = invoiceSeparately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriptionOwnerAccount")
    public CreateSubscriptionNewSubscriptionOwnerAccount newSubscriptionOwnerAccount;
    public CreateSubscription withNewSubscriptionOwnerAccount(CreateSubscriptionNewSubscriptionOwnerAccount newSubscriptionOwnerAccount) {
        this.newSubscriptionOwnerAccount = newSubscriptionOwnerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CreateSubscription withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribeToRatePlans")
    public RatePlanOverride[] subscribeToRatePlans;
    public CreateSubscription withSubscribeToRatePlans(RatePlanOverride[] subscribeToRatePlans) {
        this.subscribeToRatePlans = subscribeToRatePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public CreateSubscription withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwnerAccountNumber")
    public String subscriptionOwnerAccountNumber;
    public CreateSubscription withSubscriptionOwnerAccountNumber(String subscriptionOwnerAccountNumber) {
        this.subscriptionOwnerAccountNumber = subscriptionOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public CreateSubscriptionTerms terms;
    public CreateSubscription withTerms(CreateSubscriptionTerms terms) {
        this.terms = terms;
        return this;
    }
}
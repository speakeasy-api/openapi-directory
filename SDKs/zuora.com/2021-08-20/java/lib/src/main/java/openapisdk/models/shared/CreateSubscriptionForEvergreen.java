package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscriptionForEvergreen
 * Information about an order action of type `CreateSubscription`.
 * 
**/
public class CreateSubscriptionForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSeparately")
    public Boolean invoiceSeparately;
    public CreateSubscriptionForEvergreen withInvoiceSeparately(Boolean invoiceSeparately) {
        this.invoiceSeparately = invoiceSeparately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriptionOwnerAccount")
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount newSubscriptionOwnerAccount;
    public CreateSubscriptionForEvergreen withNewSubscriptionOwnerAccount(CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount newSubscriptionOwnerAccount) {
        this.newSubscriptionOwnerAccount = newSubscriptionOwnerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CreateSubscriptionForEvergreen withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribeToRatePlans")
    public RatePlanOverrideForEvergreen[] subscribeToRatePlans;
    public CreateSubscriptionForEvergreen withSubscribeToRatePlans(RatePlanOverrideForEvergreen[] subscribeToRatePlans) {
        this.subscribeToRatePlans = subscribeToRatePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public CreateSubscriptionForEvergreen withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwnerAccountNumber")
    public String subscriptionOwnerAccountNumber;
    public CreateSubscriptionForEvergreen withSubscriptionOwnerAccountNumber(String subscriptionOwnerAccountNumber) {
        this.subscriptionOwnerAccountNumber = subscriptionOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public CreateSubscriptionForEvergreenTerms terms;
    public CreateSubscriptionForEvergreen withTerms(CreateSubscriptionForEvergreenTerms terms) {
        this.terms = terms;
        return this;
    }
}
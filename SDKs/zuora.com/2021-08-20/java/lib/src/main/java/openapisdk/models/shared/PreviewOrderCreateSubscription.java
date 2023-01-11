package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderCreateSubscription
 * Information about an order action of type `CreateSubscription`.
 * 
**/
public class PreviewOrderCreateSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSeparately")
    public Boolean invoiceSeparately;
    public PreviewOrderCreateSubscription withInvoiceSeparately(Boolean invoiceSeparately) {
        this.invoiceSeparately = invoiceSeparately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriptionOwnerAccount")
    public PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount newSubscriptionOwnerAccount;
    public PreviewOrderCreateSubscription withNewSubscriptionOwnerAccount(PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount newSubscriptionOwnerAccount) {
        this.newSubscriptionOwnerAccount = newSubscriptionOwnerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public PreviewOrderCreateSubscription withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribeToRatePlans")
    public PreviewOrderRatePlanOverride[] subscribeToRatePlans;
    public PreviewOrderCreateSubscription withSubscribeToRatePlans(PreviewOrderRatePlanOverride[] subscribeToRatePlans) {
        this.subscribeToRatePlans = subscribeToRatePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PreviewOrderCreateSubscription withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionOwnerAccountNumber")
    public String subscriptionOwnerAccountNumber;
    public PreviewOrderCreateSubscription withSubscriptionOwnerAccountNumber(String subscriptionOwnerAccountNumber) {
        this.subscriptionOwnerAccountNumber = subscriptionOwnerAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public PreviewOrderCreateSubscriptionTerms terms;
    public PreviewOrderCreateSubscription withTerms(PreviewOrderCreateSubscriptionTerms terms) {
        this.terms = terms;
        return this;
    }
}
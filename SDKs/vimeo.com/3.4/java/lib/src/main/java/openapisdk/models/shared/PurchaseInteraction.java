package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PurchaseInteraction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buy")
    public PurchaseInteractionBuy buy;
    public PurchaseInteraction withBuy(PurchaseInteractionBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rent")
    public java.util.Map<String, Object> rent;
    public PurchaseInteraction withRent(java.util.Map<String, Object> rent) {
        this.rent = rent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribe")
    public PurchaseInteractionSubscribe subscribe;
    public PurchaseInteraction withSubscribe(PurchaseInteractionSubscribe subscribe) {
        this.subscribe = subscribe;
        return this;
    }
}
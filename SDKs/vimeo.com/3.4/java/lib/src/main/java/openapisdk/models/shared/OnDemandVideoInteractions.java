package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandVideoInteractions
 * An object containing information about how the authenticated user can interact with this On Demand page.
**/
public class OnDemandVideoInteractions {
    @JsonProperty("page")
    public OnDemandVideoInteractionsPage page;
    public OnDemandVideoInteractions withPage(OnDemandVideoInteractionsPage page) {
        this.page = page;
        return this;
    }
}
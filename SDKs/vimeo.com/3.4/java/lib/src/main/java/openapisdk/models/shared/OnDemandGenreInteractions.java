package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandGenreInteractions {
    @JsonProperty("page")
    public OnDemandGenreInteractionsPage page;
    public OnDemandGenreInteractions withPage(OnDemandGenreInteractionsPage page) {
        this.page = page;
        return this;
    }
}
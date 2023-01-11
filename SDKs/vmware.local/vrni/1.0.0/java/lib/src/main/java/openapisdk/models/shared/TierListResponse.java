package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TierListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Tier[] results;
    public TierListResponse withResults(Tier[] results) {
        this.results = results;
        return this;
    }
}
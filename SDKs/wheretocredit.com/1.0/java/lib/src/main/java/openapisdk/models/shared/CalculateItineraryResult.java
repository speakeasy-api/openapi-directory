package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateItineraryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CalculateItineraryResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totals")
    public CalculateItineraryProgramResult[] totals;
    public CalculateItineraryResult withTotals(CalculateItineraryProgramResult[] totals) {
        this.totals = totals;
        return this;
    }
}
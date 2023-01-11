package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateItineraryProgramResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airlines")
    public String[] airlines;
    public CalculateItineraryProgramResult withAirlines(String[] airlines) {
        this.airlines = airlines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CalculateItineraryProgramResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CalculateItineraryProgramResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueBased")
    public Boolean revenueBased;
    public CalculateItineraryProgramResult withRevenueBased(Boolean revenueBased) {
        this.revenueBased = revenueBased;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unpublished")
    public Boolean unpublished;
    public CalculateItineraryProgramResult withUnpublished(Boolean unpublished) {
        this.unpublished = unpublished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Integer value;
    public CalculateItineraryProgramResult withValue(Integer value) {
        this.value = value;
        return this;
    }
}
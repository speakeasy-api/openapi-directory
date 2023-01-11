package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlacedBetLeg {
    @JsonProperty("number")
    public Long number;
    public PlacedBetLeg withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("parts")
    public PlacedBetPart[] parts;
    public PlacedBetLeg withParts(PlacedBetPart[] parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String sort;
    public PlacedBetLeg withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PlacedBetLeg withType(String type) {
        this.type = type;
        return this;
    }
}
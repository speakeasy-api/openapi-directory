package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Leg {
    @JsonProperty("parts")
    public Part[] parts;
    public Leg withParts(Part[] parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String sort;
    public Leg withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Leg withType(String type) {
        this.type = type;
        return this;
    }
}
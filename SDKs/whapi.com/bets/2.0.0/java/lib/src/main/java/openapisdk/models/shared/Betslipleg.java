package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Betslipleg {
    @JsonProperty("parts")
    public Betslippart[] parts;
    public Betslipleg withParts(Betslippart[] parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String sort;
    public Betslipleg withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Betslipleg withType(String type) {
        this.type = type;
        return this;
    }
}
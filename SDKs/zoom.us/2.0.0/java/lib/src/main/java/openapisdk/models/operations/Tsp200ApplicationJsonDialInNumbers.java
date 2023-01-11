package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tsp200ApplicationJsonDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public Tsp200ApplicationJsonDialInNumbers withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public Tsp200ApplicationJsonDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Tsp200ApplicationJsonDialInNumbers withType(String type) {
        this.type = type;
        return this;
    }
}
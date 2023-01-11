package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCalloutCountries201ApplicationJsonCalloutCountries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public AddCalloutCountries201ApplicationJsonCalloutCountries withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AddCalloutCountries201ApplicationJsonCalloutCountries withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AddCalloutCountries201ApplicationJsonCalloutCountries withName(String name) {
        this.name = name;
        return this;
    }
}
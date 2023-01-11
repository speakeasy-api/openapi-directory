package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInternalCalloutCountries200ApplicationJsonCalloutCountries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ListInternalCalloutCountries200ApplicationJsonCalloutCountries withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListInternalCalloutCountries200ApplicationJsonCalloutCountries withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListInternalCalloutCountries200ApplicationJsonCalloutCountries withName(String name) {
        this.name = name;
        return this;
    }
}
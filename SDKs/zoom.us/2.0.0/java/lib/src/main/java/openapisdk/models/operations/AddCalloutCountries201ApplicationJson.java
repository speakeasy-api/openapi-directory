package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCalloutCountries201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_countries")
    public AddCalloutCountries201ApplicationJsonCalloutCountries[] calloutCountries;
    public AddCalloutCountries201ApplicationJson withCalloutCountries(AddCalloutCountries201ApplicationJsonCalloutCountries[] calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddCalloutCountriesApplicationJson {
    @JsonProperty("callout_countries")
    public AddCalloutCountriesApplicationJsonCalloutCountries[] calloutCountries;
    public AddCalloutCountriesApplicationJson withCalloutCountries(AddCalloutCountriesApplicationJsonCalloutCountries[] calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
}
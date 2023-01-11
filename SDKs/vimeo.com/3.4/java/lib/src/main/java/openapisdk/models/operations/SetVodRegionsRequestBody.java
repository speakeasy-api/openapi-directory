package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetVodRegionsRequestBody {
    @JsonProperty("countries")
    public String[] countries;
    public SetVodRegionsRequestBody withCountries(String[] countries) {
        this.countries = countries;
        return this;
    }
}
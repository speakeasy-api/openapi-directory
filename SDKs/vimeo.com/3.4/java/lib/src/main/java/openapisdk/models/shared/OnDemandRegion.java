package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandRegion {
    @JsonProperty("country_code")
    public String countryCode;
    public OnDemandRegion withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("country_name")
    public String countryName;
    public OnDemandRegion withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandRegion withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
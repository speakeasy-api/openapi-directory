package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Meeting200ApplicationJsonSettingsGlobalDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Meeting200ApplicationJsonSettingsGlobalDialInNumbers withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Meeting200ApplicationJsonSettingsGlobalDialInNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public Meeting200ApplicationJsonSettingsGlobalDialInNumbers withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public Meeting200ApplicationJsonSettingsGlobalDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum type;
    public Meeting200ApplicationJsonSettingsGlobalDialInNumbers withType(Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum type) {
        this.type = type;
        return this;
    }
}
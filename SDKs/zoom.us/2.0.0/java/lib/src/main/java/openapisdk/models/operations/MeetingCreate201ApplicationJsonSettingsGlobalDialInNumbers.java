package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum type;
    public MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers withType(MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum type) {
        this.type = type;
        return this;
    }
}
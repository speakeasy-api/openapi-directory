package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum type;
    public MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers withType(MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum type) {
        this.type = type;
        return this;
    }
}
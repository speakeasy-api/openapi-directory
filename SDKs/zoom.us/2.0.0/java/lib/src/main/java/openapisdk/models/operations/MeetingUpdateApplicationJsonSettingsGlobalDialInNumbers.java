package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum type;
    public MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers withType(MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings
 * Account Settings: TSP.
**/
public class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out")
    public Boolean callOut;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings withCallOut(Boolean callOut) {
        this.callOut = callOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out_countries")
    public Object[] callOutCountries;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings withCallOutCountries(Object[] callOutCountries) {
        this.callOutCountries = callOutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_international_numbers_link")
    public Boolean showInternationalNumbersLink;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings withShowInternationalNumbersLink(Boolean showInternationalNumbersLink) {
        this.showInternationalNumbersLink = showInternationalNumbersLink;
        return this;
    }
}
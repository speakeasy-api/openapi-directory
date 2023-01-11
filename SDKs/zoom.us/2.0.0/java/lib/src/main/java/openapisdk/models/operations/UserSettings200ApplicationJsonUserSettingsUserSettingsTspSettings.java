package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings
 * Account Settings: TSP.
**/
public class UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out")
    public Boolean callOut;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings withCallOut(Boolean callOut) {
        this.callOut = callOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out_countries")
    public Object[] callOutCountries;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings withCallOutCountries(Object[] callOutCountries) {
        this.callOutCountries = callOutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_international_numbers_link")
    public Boolean showInternationalNumbersLink;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings withShowInternationalNumbersLink(Boolean showInternationalNumbersLink) {
        this.showInternationalNumbersLink = showInternationalNumbersLink;
        return this;
    }
}
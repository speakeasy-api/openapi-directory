package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserResponsePreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public UserResponsePreferencesCurrencyEnum currency;
    public UserResponsePreferences withCurrency(UserResponsePreferencesCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFormat")
    public String dateFormat;
    public UserResponsePreferences withDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public UserResponsePreferencesLocaleEnum locale;
    public UserResponsePreferences withLocale(UserResponsePreferencesLocaleEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public UserResponsePreferences withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}
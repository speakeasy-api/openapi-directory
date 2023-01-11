package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserRequestPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public UserRequestPreferencesCurrencyEnum currency;
    public UserRequestPreferences withCurrency(UserRequestPreferencesCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFormat")
    public String dateFormat;
    public UserRequestPreferences withDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public UserRequestPreferencesLocaleEnum locale;
    public UserRequestPreferences withLocale(UserRequestPreferencesLocaleEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public UserRequestPreferences withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}
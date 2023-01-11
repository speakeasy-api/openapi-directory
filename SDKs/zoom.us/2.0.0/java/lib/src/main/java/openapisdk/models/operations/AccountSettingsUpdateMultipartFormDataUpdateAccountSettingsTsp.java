package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp
 * Account Settings: TSP.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out")
    public Boolean callOut;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp withCallOut(Boolean callOut) {
        this.callOut = callOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out_countries")
    public Object[] callOutCountries;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp withCallOutCountries(Object[] callOutCountries) {
        this.callOutCountries = callOutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_toll_free_numbers")
    public Boolean displayTollFreeNumbers;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp withDisplayTollFreeNumbers(Boolean displayTollFreeNumbers) {
        this.displayTollFreeNumbers = displayTollFreeNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_international_numbers_link")
    public Boolean showInternationalNumbersLink;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp withShowInternationalNumbersLink(Boolean showInternationalNumbersLink) {
        this.showInternationalNumbersLink = showInternationalNumbersLink;
        return this;
    }
}
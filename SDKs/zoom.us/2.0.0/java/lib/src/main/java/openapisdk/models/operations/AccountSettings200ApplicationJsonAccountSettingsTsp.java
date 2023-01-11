package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsTsp
 * Account Settings: TSP.
**/
public class AccountSettings200ApplicationJsonAccountSettingsTsp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out")
    public Boolean callOut;
    public AccountSettings200ApplicationJsonAccountSettingsTsp withCallOut(Boolean callOut) {
        this.callOut = callOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_out_countries")
    public Object[] callOutCountries;
    public AccountSettings200ApplicationJsonAccountSettingsTsp withCallOutCountries(Object[] callOutCountries) {
        this.callOutCountries = callOutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_toll_free_numbers")
    public Boolean displayTollFreeNumbers;
    public AccountSettings200ApplicationJsonAccountSettingsTsp withDisplayTollFreeNumbers(Boolean displayTollFreeNumbers) {
        this.displayTollFreeNumbers = displayTollFreeNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_international_numbers_link")
    public Boolean showInternationalNumbersLink;
    public AccountSettings200ApplicationJsonAccountSettingsTsp withShowInternationalNumbersLink(Boolean showInternationalNumbersLink) {
        this.showInternationalNumbersLink = showInternationalNumbersLink;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserTsPs200ApplicationJsonTspAccountsListDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public UserTsPs200ApplicationJsonTspAccountsListDialInNumbers withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_label")
    public String countryLabel;
    public UserTsPs200ApplicationJsonTspAccountsListDialInNumbers withCountryLabel(String countryLabel) {
        this.countryLabel = countryLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public UserTsPs200ApplicationJsonTspAccountsListDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum type;
    public UserTsPs200ApplicationJsonTspAccountsListDialInNumbers withType(UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserTspCreateTspAccountsListDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public UserTspCreateTspAccountsListDialInNumbers withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_label")
    public String countryLabel;
    public UserTspCreateTspAccountsListDialInNumbers withCountryLabel(String countryLabel) {
        this.countryLabel = countryLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public UserTspCreateTspAccountsListDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserTspCreateTspAccountsListDialInNumbersTypeEnum type;
    public UserTspCreateTspAccountsListDialInNumbers withType(UserTspCreateTspAccountsListDialInNumbersTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
}
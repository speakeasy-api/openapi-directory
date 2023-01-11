package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserUpdateMultipartFormDataPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public UserUpdateMultipartFormDataPhoneNumbers withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public UserUpdateMultipartFormDataPhoneNumbers withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public UserUpdateMultipartFormDataPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
}
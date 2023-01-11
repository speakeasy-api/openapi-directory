package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Profile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress[] address;
    public Profile withAddress(AccountAddress[] address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public Email[] email;
    public Profile withEmail(Email[] email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public Profile withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public Identifier[] identifier;
    public Profile withIdentifier(Identifier[] identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public Profile withName(Name name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public PhoneNumber[] phoneNumber;
    public Profile withPhoneNumber(PhoneNumber[] phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}
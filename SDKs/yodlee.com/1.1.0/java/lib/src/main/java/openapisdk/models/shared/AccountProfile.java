package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress[] address;
    public AccountProfile withAddress(AccountAddress[] address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public Email[] email;
    public AccountProfile withEmail(Email[] email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public Identifier[] identifier;
    public AccountProfile withIdentifier(Identifier[] identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public PhoneNumber[] phoneNumber;
    public AccountProfile withPhoneNumber(PhoneNumber[] phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}
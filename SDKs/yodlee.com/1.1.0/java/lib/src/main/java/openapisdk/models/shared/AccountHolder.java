package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountHolder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public AccountHolder withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public Identifier[] identifier;
    public AccountHolder withIdentifier(Identifier[] identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public AccountHolder withName(Name name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownership")
    public AccountHolderOwnershipEnum ownership;
    public AccountHolder withOwnership(AccountHolderOwnershipEnum ownership) {
        this.ownership = ownership;
        return this;
    }
}
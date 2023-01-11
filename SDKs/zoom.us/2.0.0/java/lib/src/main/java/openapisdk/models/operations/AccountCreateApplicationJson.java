package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountCreateApplicationJson
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
public class AccountCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_name")
    public String accountName;
    public AccountCreateApplicationJson withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public AccountCreateApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public AccountCreateApplicationJson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public AccountCreateApplicationJson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public AccountCreateApplicationJsonOptions options;
    public AccountCreateApplicationJson withOptions(AccountCreateApplicationJsonOptions options) {
        this.options = options;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public AccountCreateApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
}
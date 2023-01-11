package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_numbers")
    public Contact[] contactNumbers;
    public User withContactNumbers(Contact[] contactNumbers) {
        this.contactNumbers = contactNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public User withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extensions")
    public UserExtension[] extensions;
    public User withExtensions(UserExtension[] extensions) {
        this.extensions = extensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public User withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Double id;
    public User withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public User withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login_name")
    public String loginName;
    public User withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
}
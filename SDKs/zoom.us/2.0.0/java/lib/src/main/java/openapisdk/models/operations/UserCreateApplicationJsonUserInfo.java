package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserCreateApplicationJsonUserInfo {
    @JsonProperty("email")
    public String email;
    public UserCreateApplicationJsonUserInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public UserCreateApplicationJsonUserInfo withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public UserCreateApplicationJsonUserInfo withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UserCreateApplicationJsonUserInfo withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public UserCreateApplicationJsonUserInfo withType(Long type) {
        this.type = type;
        return this;
    }
}
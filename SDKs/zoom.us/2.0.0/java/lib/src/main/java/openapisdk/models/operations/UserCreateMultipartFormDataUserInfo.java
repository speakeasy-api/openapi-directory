package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserCreateMultipartFormDataUserInfo {
    @JsonProperty("email")
    public String email;
    public UserCreateMultipartFormDataUserInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public UserCreateMultipartFormDataUserInfo withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public UserCreateMultipartFormDataUserInfo withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UserCreateMultipartFormDataUserInfo withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public UserCreateMultipartFormDataUserInfo withType(Long type) {
        this.type = type;
        return this;
    }
}
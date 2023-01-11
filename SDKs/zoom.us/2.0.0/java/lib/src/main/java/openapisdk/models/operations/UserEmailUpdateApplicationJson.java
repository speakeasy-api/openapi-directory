package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserEmailUpdateApplicationJson {
    @JsonProperty("email")
    public String email;
    public UserEmailUpdateApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
}
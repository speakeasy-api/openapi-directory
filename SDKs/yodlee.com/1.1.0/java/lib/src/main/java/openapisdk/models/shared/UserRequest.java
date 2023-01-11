package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserRequest {
    @JsonProperty("user")
    public UserRegistration user;
    public UserRequest withUser(UserRegistration user) {
        this.user = user;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateUserRequest {
    @JsonProperty("user")
    public UpdateUserRegistration user;
    public UpdateUserRequest withUser(UpdateUserRegistration user) {
        this.user = user;
        return this;
    }
}
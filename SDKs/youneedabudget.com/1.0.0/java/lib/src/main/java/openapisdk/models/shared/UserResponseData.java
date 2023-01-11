package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserResponseData {
    @JsonProperty("user")
    public User user;
    public UserResponseData withUser(User user) {
        this.user = user;
        return this;
    }
}
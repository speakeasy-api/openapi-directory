package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public UserResponse withUser(User user) {
        this.user = user;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserResponse {
    @JsonProperty("data")
    public UserResponseData data;
    public UserResponse withData(UserResponseData data) {
        this.data = data;
        return this;
    }
}
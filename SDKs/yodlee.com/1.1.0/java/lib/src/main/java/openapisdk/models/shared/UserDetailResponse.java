package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserDetail user;
    public UserDetailResponse withUser(UserDetail user) {
        this.user = user;
        return this;
    }
}
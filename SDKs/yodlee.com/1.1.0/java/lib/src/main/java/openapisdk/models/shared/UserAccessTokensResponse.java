package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserAccessTokensResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserAccessToken user;
    public UserAccessTokensResponse withUser(UserAccessToken user) {
        this.user = user;
        return this;
    }
}
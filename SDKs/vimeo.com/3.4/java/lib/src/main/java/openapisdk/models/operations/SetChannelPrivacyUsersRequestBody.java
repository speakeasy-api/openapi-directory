package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetChannelPrivacyUsersRequestBody {
    @JsonProperty("users")
    public String[] users;
    public SetChannelPrivacyUsersRequestBody withUsers(String[] users) {
        this.users = users;
        return this;
    }
}
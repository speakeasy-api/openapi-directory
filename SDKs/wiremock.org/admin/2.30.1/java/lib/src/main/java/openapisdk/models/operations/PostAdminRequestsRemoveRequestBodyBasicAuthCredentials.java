package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminRequestsRemoveRequestBodyBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PostAdminRequestsRemoveRequestBodyBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PostAdminRequestsRemoveRequestBodyBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostAdminRequestsRemoveRequestBodyBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
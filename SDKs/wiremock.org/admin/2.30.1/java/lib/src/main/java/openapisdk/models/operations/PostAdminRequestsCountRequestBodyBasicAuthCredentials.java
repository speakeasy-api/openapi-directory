package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminRequestsCountRequestBodyBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PostAdminRequestsCountRequestBodyBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PostAdminRequestsCountRequestBodyBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostAdminRequestsCountRequestBodyBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
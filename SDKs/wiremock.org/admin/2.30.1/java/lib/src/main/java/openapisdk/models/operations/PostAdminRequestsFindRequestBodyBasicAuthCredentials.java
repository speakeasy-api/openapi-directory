package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminRequestsFindRequestBodyBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PostAdminRequestsFindRequestBodyBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PostAdminRequestsFindRequestBodyBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostAdminRequestsFindRequestBodyBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
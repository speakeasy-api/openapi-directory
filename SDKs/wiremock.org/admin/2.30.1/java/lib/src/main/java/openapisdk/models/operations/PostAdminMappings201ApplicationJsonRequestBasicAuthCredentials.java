package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
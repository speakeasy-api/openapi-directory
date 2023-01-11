package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
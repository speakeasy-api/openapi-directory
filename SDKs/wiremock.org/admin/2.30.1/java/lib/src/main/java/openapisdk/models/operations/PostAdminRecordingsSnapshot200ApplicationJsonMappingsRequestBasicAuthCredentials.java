package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
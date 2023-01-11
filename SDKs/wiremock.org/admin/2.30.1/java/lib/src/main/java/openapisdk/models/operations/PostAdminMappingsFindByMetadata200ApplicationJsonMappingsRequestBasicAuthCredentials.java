package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
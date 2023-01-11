package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
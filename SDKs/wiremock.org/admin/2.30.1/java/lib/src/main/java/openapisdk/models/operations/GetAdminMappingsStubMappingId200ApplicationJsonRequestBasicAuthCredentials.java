package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
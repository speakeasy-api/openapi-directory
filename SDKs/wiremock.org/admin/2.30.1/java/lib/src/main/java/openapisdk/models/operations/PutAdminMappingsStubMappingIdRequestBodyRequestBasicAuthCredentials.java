package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials
 * Pre-emptive basic auth credentials to match against
**/
public class PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials {
    @JsonProperty("password")
    public String password;
    public PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}
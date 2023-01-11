package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClientCredentialTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public ClientCredentialToken token;
    public ClientCredentialTokenResponse withToken(ClientCredentialToken token) {
        this.token = token;
        return this;
    }
}
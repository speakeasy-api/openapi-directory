package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public ApiKeyRequest withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}
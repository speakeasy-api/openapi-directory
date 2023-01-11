package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigsPublicKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public ConfigsPublicKey publicKey;
    public ConfigsPublicKeyResponse withPublicKey(ConfigsPublicKey publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}
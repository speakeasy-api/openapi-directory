package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CobrandPublicKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlias")
    public String keyAlias;
    public CobrandPublicKeyResponse withKeyAlias(String keyAlias) {
        this.keyAlias = keyAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAsPemString")
    public String keyAsPemString;
    public CobrandPublicKeyResponse withKeyAsPemString(String keyAsPemString) {
        this.keyAsPemString = keyAsPemString;
        return this;
    }
}
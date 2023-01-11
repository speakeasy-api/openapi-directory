package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostDecryptionType {
    @JsonProperty("method")
    public String method;
    public PostDecryptionType withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("publicKey")
    public String publicKey;
    public PostDecryptionType withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonProperty("signature")
    public String signature;
    public PostDecryptionType withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}
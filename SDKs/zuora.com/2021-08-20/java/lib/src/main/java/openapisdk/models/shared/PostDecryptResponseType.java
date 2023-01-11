package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDecryptResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decryptedSignature")
    public String decryptedSignature;
    public PostDecryptResponseType withDecryptedSignature(String decryptedSignature) {
        this.decryptedSignature = decryptedSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public PostDecryptResponseType withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public PostDecryptResponseType withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostDecryptResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
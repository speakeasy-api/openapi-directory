package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostrsaSignatureResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public PostrsaSignatureResponseType withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public PostrsaSignatureResponseType withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostrsaSignatureResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public PostrsaSignatureResponseType withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public PostrsaSignatureResponseType withToken(String token) {
        this.token = token;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClientCredentialToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public ClientCredentialToken withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresIn")
    public Integer expiresIn;
    public ClientCredentialToken withExpiresIn(Integer expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuedAt")
    public String issuedAt;
    public ClientCredentialToken withIssuedAt(String issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
}
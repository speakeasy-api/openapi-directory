package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Token {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiry")
    public Long expiry;
    public Token withExpiry(Long expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public Token withToken(String token) {
        this.token = token;
        return this;
    }
}
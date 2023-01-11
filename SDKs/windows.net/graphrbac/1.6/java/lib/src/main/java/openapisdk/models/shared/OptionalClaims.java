package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OptionalClaims
 * Specifying the claims to be included in the token.
**/
public class OptionalClaims {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public OptionalClaim[] accessToken;
    public OptionalClaims withAccessToken(OptionalClaim[] accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public OptionalClaim[] idToken;
    public OptionalClaims withIdToken(OptionalClaim[] idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlToken")
    public OptionalClaim[] samlToken;
    public OptionalClaims withSamlToken(OptionalClaim[] samlToken) {
        this.samlToken = samlToken;
        return this;
    }
}
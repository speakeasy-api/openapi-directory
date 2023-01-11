package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Auth {
    @JsonProperty("access_token")
    public String accessToken;
    public Auth withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("app")
    public ApiApp app;
    public Auth withApp(ApiApp app) {
        this.app = app;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_on")
    public String expiresOn;
    public Auth withExpiresOn(String expiresOn) {
        this.expiresOn = expiresOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_token")
    public String refreshToken;
    public Auth withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonProperty("scope")
    public String scope;
    public Auth withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonProperty("token_type")
    public AuthTokenTypeEnum tokenType;
    public Auth withTokenType(AuthTokenTypeEnum tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Auth withUser(User user) {
        this.user = user;
        return this;
    }
}
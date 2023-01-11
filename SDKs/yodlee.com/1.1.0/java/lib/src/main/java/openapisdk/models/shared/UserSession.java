package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSession")
    public String userSession;
    public UserSession withUserSession(String userSession) {
        this.userSession = userSession;
        return this;
    }
}
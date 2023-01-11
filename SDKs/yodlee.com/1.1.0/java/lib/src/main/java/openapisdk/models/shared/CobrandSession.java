package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CobrandSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cobSession")
    public String cobSession;
    public CobrandSession withCobSession(String cobSession) {
        this.cobSession = cobSession;
        return this;
    }
}
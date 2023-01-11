package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CobrandLoginResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationId")
    public String applicationId;
    public CobrandLoginResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cobrandId")
    public Long cobrandId;
    public CobrandLoginResponse withCobrandId(Long cobrandId) {
        this.cobrandId = cobrandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public CobrandLoginResponse withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public CobrandSession session;
    public CobrandLoginResponse withSession(CobrandSession session) {
        this.session = session;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalloutAuth
 * If requiredAuth is true, this object is required.
**/
public class CalloutAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public CalloutAuth withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public CalloutAuth withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preemptive")
    public Boolean preemptive;
    public CalloutAuth withPreemptive(Boolean preemptive) {
        this.preemptive = preemptive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public CalloutAuth withUsername(String username) {
        this.username = username;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPlanCreateApplicationJsonPlanBase
 * Account base plan object.
**/
public class AccountPlanCreateApplicationJsonPlanBase {
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanCreateApplicationJsonPlanBase withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountPlanCreateApplicationJsonPlanBase withType(String type) {
        this.type = type;
        return this;
    }
}
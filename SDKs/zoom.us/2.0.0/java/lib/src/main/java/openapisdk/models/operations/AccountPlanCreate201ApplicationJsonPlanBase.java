package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPlanCreate201ApplicationJsonPlanBase
 * Account base plan object.
**/
public class AccountPlanCreate201ApplicationJsonPlanBase {
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanCreate201ApplicationJsonPlanBase withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountPlanCreate201ApplicationJsonPlanBase withType(String type) {
        this.type = type;
        return this;
    }
}
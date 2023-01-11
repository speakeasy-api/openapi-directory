package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPlanAddonCreateApplicationJson1
 * Account plan object.
**/
public class AccountPlanAddonCreateApplicationJson1 {
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanAddonCreateApplicationJson1 withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountPlanAddonCreateApplicationJson1 withType(String type) {
        this.type = type;
        return this;
    }
}
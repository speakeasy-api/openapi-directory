package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPlanAddonUpdateApplicationJson
 * Account plan object.
**/
public class AccountPlanAddonUpdateApplicationJson {
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanAddonUpdateApplicationJson withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountPlanAddonUpdateApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}
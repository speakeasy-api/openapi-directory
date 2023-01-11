package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPlanBaseUpdateApplicationJson
 * Account base plan object.
**/
public class AccountPlanBaseUpdateApplicationJson {
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanBaseUpdateApplicationJson withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountPlanBaseUpdateApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}
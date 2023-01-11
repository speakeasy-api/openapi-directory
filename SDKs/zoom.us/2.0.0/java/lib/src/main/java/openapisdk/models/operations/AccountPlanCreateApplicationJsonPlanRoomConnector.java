package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateApplicationJsonPlanRoomConnector
 * Account plan object.
**/
public class AccountPlanCreateApplicationJsonPlanRoomConnector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanCreateApplicationJsonPlanRoomConnector withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanCreateApplicationJsonPlanRoomConnector withType(String type) {
        this.type = type;
        return this;
    }
}
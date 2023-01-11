package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateApplicationJsonPlanZoomRooms
 * Account plan object.
**/
public class AccountPlanCreateApplicationJsonPlanZoomRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanCreateApplicationJsonPlanZoomRooms withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanCreateApplicationJsonPlanZoomRooms withType(String type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreate201ApplicationJsonPlanZoomRooms
 * Account plan object.
**/
public class AccountPlanCreate201ApplicationJsonPlanZoomRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanCreate201ApplicationJsonPlanZoomRooms withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanCreate201ApplicationJsonPlanZoomRooms withType(String type) {
        this.type = type;
        return this;
    }
}
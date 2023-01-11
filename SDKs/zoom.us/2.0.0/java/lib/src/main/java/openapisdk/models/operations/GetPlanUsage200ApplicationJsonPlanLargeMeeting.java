package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPlanUsage200ApplicationJsonPlanLargeMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public GetPlanUsage200ApplicationJsonPlanLargeMeeting withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetPlanUsage200ApplicationJsonPlanLargeMeeting withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public Long usage;
    public GetPlanUsage200ApplicationJsonPlanLargeMeeting withUsage(Long usage) {
        this.usage = usage;
        return this;
    }
}
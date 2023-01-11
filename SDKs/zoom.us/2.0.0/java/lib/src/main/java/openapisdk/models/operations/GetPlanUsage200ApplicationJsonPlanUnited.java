package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPlanUsage200ApplicationJsonPlanUnited
 * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
**/
public class GetPlanUsage200ApplicationJsonPlanUnited {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public GetPlanUsage200ApplicationJsonPlanUnited withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPlanUsage200ApplicationJsonPlanUnited withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetPlanUsage200ApplicationJsonPlanUnited withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public Long usage;
    public GetPlanUsage200ApplicationJsonPlanUnited withUsage(Long usage) {
        this.usage = usage;
        return this;
    }
}
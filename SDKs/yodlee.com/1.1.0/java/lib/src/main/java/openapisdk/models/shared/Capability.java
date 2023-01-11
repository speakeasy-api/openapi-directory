package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Capability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public CapabilityContainerEnum[] container;
    public Capability withContainer(CapabilityContainerEnum[] container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Capability withName(String name) {
        this.name = name;
        return this;
    }
}
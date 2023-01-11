package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttributeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public AttributeContainerEnum[] container;
    public AttributeInput withContainer(AttributeContainerEnum[] container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerAttributes")
    public ContainerAttributes containerAttributes;
    public AttributeInput withContainerAttributes(ContainerAttributes containerAttributes) {
        this.containerAttributes = containerAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public AttributeNameEnum name;
    public AttributeInput withName(AttributeNameEnum name) {
        this.name = name;
        return this;
    }
}
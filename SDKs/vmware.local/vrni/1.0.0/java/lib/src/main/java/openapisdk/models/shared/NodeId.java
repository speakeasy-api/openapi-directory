package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public NodeTypeEnum entityType;
    public NodeId withEntityType(NodeTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NodeId withId(String id) {
        this.id = id;
        return this;
    }
}
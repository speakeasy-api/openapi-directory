package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Group {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public Group withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public Group withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public Reference[] members;
    public Group withMembers(Reference[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Group withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntityIdWithTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public EntityIdWithTime withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public EntityIdWithTime withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public EntityIdWithTime withTime(Long time) {
        this.time = time;
        return this;
    }
}
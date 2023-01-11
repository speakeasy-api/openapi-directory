package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProblemEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_state")
    public ProblemEventAdminStateEnum adminState;
    public ProblemEvent withAdminState(ProblemEventAdminStateEnum adminState) {
        this.adminState = adminState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anchor_entities")
    public Reference[] anchorEntities;
    public ProblemEvent withAnchorEntities(Reference[] anchorEntities) {
        this.anchorEntities = anchorEntities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ProblemEvent withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public ProblemEvent withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public ProblemEvent withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_close_time_epoch_ms")
    public Long eventCloseTimeEpochMs;
    public ProblemEvent withEventCloseTimeEpochMs(Long eventCloseTimeEpochMs) {
        this.eventCloseTimeEpochMs = eventCloseTimeEpochMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_tags")
    public String[] eventTags;
    public ProblemEvent withEventTags(String[] eventTags) {
        this.eventTags = eventTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_time_epoch_ms")
    public Long eventTimeEpochMs;
    public ProblemEvent withEventTimeEpochMs(Long eventTimeEpochMs) {
        this.eventTimeEpochMs = eventTimeEpochMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ProblemEvent withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProblemEvent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related_entities")
    public Reference[] relatedEntities;
    public ProblemEvent withRelatedEntities(Reference[] relatedEntities) {
        this.relatedEntities = relatedEntities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public ProblemEventSeverityEnum severity;
    public ProblemEvent withSeverity(ProblemEventSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
}
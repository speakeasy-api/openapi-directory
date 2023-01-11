package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostEventTriggerRequest {
    @JsonProperty("active")
    public Boolean active;
    public PostEventTriggerRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("baseObject")
    public String baseObject;
    public PostEventTriggerRequest withBaseObject(String baseObject) {
        this.baseObject = baseObject;
        return this;
    }
    @JsonProperty("condition")
    public String condition;
    public PostEventTriggerRequest withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostEventTriggerRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("eventType")
    public EventType eventType;
    public PostEventTriggerRequest withEventType(EventType eventType) {
        this.eventType = eventType;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutEventTriggerRequestEventType
 * The type of events to be triggered.
**/
public class PutEventTriggerRequestEventType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutEventTriggerRequestEventType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PutEventTriggerRequestEventType withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EventType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("displayName")
    public String displayName;
    public EventType withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EventType withName(String name) {
        this.name = name;
        return this;
    }
}
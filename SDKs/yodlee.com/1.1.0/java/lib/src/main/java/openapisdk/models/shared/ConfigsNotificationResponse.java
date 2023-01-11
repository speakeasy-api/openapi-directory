package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigsNotificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public ConfigsNotificationEvent[] event;
    public ConfigsNotificationResponse withEvent(ConfigsNotificationEvent[] event) {
        this.event = event;
        return this;
    }
}
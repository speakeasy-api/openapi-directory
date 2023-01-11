package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateConfigsNotificationEventRequest {
    @JsonProperty("event")
    public CreateConfigsNotificationEvent event;
    public CreateConfigsNotificationEventRequest withEvent(CreateConfigsNotificationEvent event) {
        this.event = event;
        return this;
    }
}
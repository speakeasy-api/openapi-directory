package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateConfigsNotificationEventRequest {
    @JsonProperty("event")
    public UpdateConfigsNotificationEvent event;
    public UpdateConfigsNotificationEventRequest withEvent(UpdateConfigsNotificationEvent event) {
        this.event = event;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCobrandNotificationEventRequest {
    @JsonProperty("event")
    public UpdateCobrandNotificationEvent event;
    public UpdateCobrandNotificationEventRequest withEvent(UpdateCobrandNotificationEvent event) {
        this.event = event;
        return this;
    }
}
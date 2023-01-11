package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCobrandNotificationEventRequest {
    @JsonProperty("event")
    public CreateCobrandNotificationEvent event;
    public CreateCobrandNotificationEventRequest withEvent(CreateCobrandNotificationEvent event) {
        this.event = event;
        return this;
    }
}
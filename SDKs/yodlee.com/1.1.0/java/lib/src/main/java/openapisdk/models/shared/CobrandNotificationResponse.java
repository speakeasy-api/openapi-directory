package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CobrandNotificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public CobrandNotificationEvent[] event;
    public CobrandNotificationResponse withEvent(CobrandNotificationEvent[] event) {
        this.event = event;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckInRoomsApplicationJsonParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendar_id")
    public String calendarId;
    public CheckInRoomsApplicationJsonParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change_key")
    public String changeKey;
    public CheckInRoomsApplicationJsonParams withChangeKey(String changeKey) {
        this.changeKey = changeKey;
        return this;
    }
    @JsonProperty("event_id")
    public String eventId;
    public CheckInRoomsApplicationJsonParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_email")
    public String resourceEmail;
    public CheckInRoomsApplicationJsonParams withResourceEmail(String resourceEmail) {
        this.resourceEmail = resourceEmail;
        return this;
    }
}
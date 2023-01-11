package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManageE911signage202ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_id")
    public String eventId;
    public ManageE911signage202ApplicationJson withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}
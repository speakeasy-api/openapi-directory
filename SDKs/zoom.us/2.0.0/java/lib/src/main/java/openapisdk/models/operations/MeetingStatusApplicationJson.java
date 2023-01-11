package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingStatusApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public MeetingStatusApplicationJsonActionEnum action;
    public MeetingStatusApplicationJson withAction(MeetingStatusApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
}
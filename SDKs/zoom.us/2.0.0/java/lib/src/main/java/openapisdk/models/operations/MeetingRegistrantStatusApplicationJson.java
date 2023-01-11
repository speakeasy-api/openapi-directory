package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingRegistrantStatusApplicationJson {
    @JsonProperty("action")
    public MeetingRegistrantStatusApplicationJsonActionEnum action;
    public MeetingRegistrantStatusApplicationJson withAction(MeetingRegistrantStatusApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public MeetingRegistrantStatusApplicationJsonRegistrants[] registrants;
    public MeetingRegistrantStatusApplicationJson withRegistrants(MeetingRegistrantStatusApplicationJsonRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
}
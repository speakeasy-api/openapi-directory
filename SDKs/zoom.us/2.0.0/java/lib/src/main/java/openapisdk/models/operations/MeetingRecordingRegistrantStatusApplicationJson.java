package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRecordingRegistrantStatusApplicationJson
 * Registrant Status
**/
public class MeetingRecordingRegistrantStatusApplicationJson {
    @JsonProperty("action")
    public MeetingRecordingRegistrantStatusApplicationJsonActionEnum action;
    public MeetingRecordingRegistrantStatusApplicationJson withAction(MeetingRecordingRegistrantStatusApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants")
    public Object[] registrants;
    public MeetingRecordingRegistrantStatusApplicationJson withRegistrants(Object[] registrants) {
        this.registrants = registrants;
        return this;
    }
}
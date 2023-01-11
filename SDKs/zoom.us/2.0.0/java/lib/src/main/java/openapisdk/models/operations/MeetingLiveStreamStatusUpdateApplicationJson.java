package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingLiveStreamStatusUpdateApplicationJson
 * Meeting live stream status.
**/
public class MeetingLiveStreamStatusUpdateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public MeetingLiveStreamStatusUpdateApplicationJsonActionEnum action;
    public MeetingLiveStreamStatusUpdateApplicationJson withAction(MeetingLiveStreamStatusUpdateApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public MeetingLiveStreamStatusUpdateApplicationJsonSettings settings;
    public MeetingLiveStreamStatusUpdateApplicationJson withSettings(MeetingLiveStreamStatusUpdateApplicationJsonSettings settings) {
        this.settings = settings;
        return this;
    }
}
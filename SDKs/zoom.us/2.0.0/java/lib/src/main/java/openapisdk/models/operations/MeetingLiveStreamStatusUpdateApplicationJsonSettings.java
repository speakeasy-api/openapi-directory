package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingLiveStreamStatusUpdateApplicationJsonSettings
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
**/
public class MeetingLiveStreamStatusUpdateApplicationJsonSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_speaker_name")
    public Boolean activeSpeakerName;
    public MeetingLiveStreamStatusUpdateApplicationJsonSettings withActiveSpeakerName(Boolean activeSpeakerName) {
        this.activeSpeakerName = activeSpeakerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public MeetingLiveStreamStatusUpdateApplicationJsonSettings withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}
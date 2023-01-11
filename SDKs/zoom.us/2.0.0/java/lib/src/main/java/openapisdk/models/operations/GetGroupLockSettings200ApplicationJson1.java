package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupLockSettings200ApplicationJson1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public GetGroupLockSettings200ApplicationJson1EmailNotification emailNotification;
    public GetGroupLockSettings200ApplicationJson1 withEmailNotification(GetGroupLockSettings200ApplicationJson1EmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public GetGroupLockSettings200ApplicationJson1InMeeting inMeeting;
    public GetGroupLockSettings200ApplicationJson1 withInMeeting(GetGroupLockSettings200ApplicationJson1InMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public GetGroupLockSettings200ApplicationJson1Recording recording;
    public GetGroupLockSettings200ApplicationJson1 withRecording(GetGroupLockSettings200ApplicationJson1Recording recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting scheduleMeeting;
    public GetGroupLockSettings200ApplicationJson1 withScheduleMeeting(GetGroupLockSettings200ApplicationJson1ScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public GetGroupLockSettings200ApplicationJson1Telephony telephony;
    public GetGroupLockSettings200ApplicationJson1 withTelephony(GetGroupLockSettings200ApplicationJson1Telephony telephony) {
        this.telephony = telephony;
        return this;
    }
}
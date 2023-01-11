package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupSettings200ApplicationJson1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public GetGroupSettings200ApplicationJson1EmailNotification emailNotification;
    public GetGroupSettings200ApplicationJson1 withEmailNotification(GetGroupSettings200ApplicationJson1EmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public GetGroupSettings200ApplicationJson1InMeeting inMeeting;
    public GetGroupSettings200ApplicationJson1 withInMeeting(GetGroupSettings200ApplicationJson1InMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public GetGroupSettings200ApplicationJson1Profile profile;
    public GetGroupSettings200ApplicationJson1 withProfile(GetGroupSettings200ApplicationJson1Profile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public GetGroupSettings200ApplicationJson1Recording recording;
    public GetGroupSettings200ApplicationJson1 withRecording(GetGroupSettings200ApplicationJson1Recording recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public GetGroupSettings200ApplicationJson1ScheduleMeeting scheduleMeeting;
    public GetGroupSettings200ApplicationJson1 withScheduleMeeting(GetGroupSettings200ApplicationJson1ScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public GetGroupSettings200ApplicationJson1Telephony telephony;
    public GetGroupSettings200ApplicationJson1 withTelephony(GetGroupSettings200ApplicationJson1Telephony telephony) {
        this.telephony = telephony;
        return this;
    }
}
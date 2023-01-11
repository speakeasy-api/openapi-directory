package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsApplicationJson1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public UpdateGroupSettingsApplicationJson1EmailNotification emailNotification;
    public UpdateGroupSettingsApplicationJson1 withEmailNotification(UpdateGroupSettingsApplicationJson1EmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public UpdateGroupSettingsApplicationJson1InMeeting inMeeting;
    public UpdateGroupSettingsApplicationJson1 withInMeeting(UpdateGroupSettingsApplicationJson1InMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public UpdateGroupSettingsApplicationJson1Profile profile;
    public UpdateGroupSettingsApplicationJson1 withProfile(UpdateGroupSettingsApplicationJson1Profile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public UpdateGroupSettingsApplicationJson1Recording recording;
    public UpdateGroupSettingsApplicationJson1 withRecording(UpdateGroupSettingsApplicationJson1Recording recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public UpdateGroupSettingsApplicationJson1ScheduleMeeting scheduleMeeting;
    public UpdateGroupSettingsApplicationJson1 withScheduleMeeting(UpdateGroupSettingsApplicationJson1ScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public UpdateGroupSettingsApplicationJson1Telephony telephony;
    public UpdateGroupSettingsApplicationJson1 withTelephony(UpdateGroupSettingsApplicationJson1Telephony telephony) {
        this.telephony = telephony;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupLockedSettingsApplicationJson1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public GroupLockedSettingsApplicationJson1EmailNotification emailNotification;
    public GroupLockedSettingsApplicationJson1 withEmailNotification(GroupLockedSettingsApplicationJson1EmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public GroupLockedSettingsApplicationJson1InMeeting inMeeting;
    public GroupLockedSettingsApplicationJson1 withInMeeting(GroupLockedSettingsApplicationJson1InMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public GroupLockedSettingsApplicationJson1Recording recording;
    public GroupLockedSettingsApplicationJson1 withRecording(GroupLockedSettingsApplicationJson1Recording recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public GroupLockedSettingsApplicationJson1ScheduleMeeting scheduleMeeting;
    public GroupLockedSettingsApplicationJson1 withScheduleMeeting(GroupLockedSettingsApplicationJson1ScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public GroupLockedSettingsApplicationJson1Telephony telephony;
    public GroupLockedSettingsApplicationJson1 withTelephony(GroupLockedSettingsApplicationJson1Telephony telephony) {
        this.telephony = telephony;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupLockedSettingsMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=email_notification,json")
    public GroupLockedSettingsMultipartFormData1EmailNotification emailNotification;
    public GroupLockedSettingsMultipartFormData1 withEmailNotification(GroupLockedSettingsMultipartFormData1EmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=in_meeting,json")
    public GroupLockedSettingsMultipartFormData1InMeeting inMeeting;
    public GroupLockedSettingsMultipartFormData1 withInMeeting(GroupLockedSettingsMultipartFormData1InMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recording,json")
    public GroupLockedSettingsMultipartFormData1Recording recording;
    public GroupLockedSettingsMultipartFormData1 withRecording(GroupLockedSettingsMultipartFormData1Recording recording) {
        this.recording = recording;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule_meeting,json")
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting scheduleMeeting;
    public GroupLockedSettingsMultipartFormData1 withScheduleMeeting(GroupLockedSettingsMultipartFormData1ScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=telephony,json")
    public GroupLockedSettingsMultipartFormData1Telephony telephony;
    public GroupLockedSettingsMultipartFormData1 withTelephony(GroupLockedSettingsMultipartFormData1Telephony telephony) {
        this.telephony = telephony;
        return this;
    }
}
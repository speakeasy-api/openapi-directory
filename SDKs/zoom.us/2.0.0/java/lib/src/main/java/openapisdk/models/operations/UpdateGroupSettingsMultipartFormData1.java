package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupSettingsMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=email_notification,json")
    public UpdateGroupSettingsMultipartFormData1EmailNotification emailNotification;
    public UpdateGroupSettingsMultipartFormData1 withEmailNotification(UpdateGroupSettingsMultipartFormData1EmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=in_meeting,json")
    public UpdateGroupSettingsMultipartFormData1InMeeting inMeeting;
    public UpdateGroupSettingsMultipartFormData1 withInMeeting(UpdateGroupSettingsMultipartFormData1InMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=profile,json")
    public UpdateGroupSettingsMultipartFormData1Profile profile;
    public UpdateGroupSettingsMultipartFormData1 withProfile(UpdateGroupSettingsMultipartFormData1Profile profile) {
        this.profile = profile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recording,json")
    public UpdateGroupSettingsMultipartFormData1Recording recording;
    public UpdateGroupSettingsMultipartFormData1 withRecording(UpdateGroupSettingsMultipartFormData1Recording recording) {
        this.recording = recording;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule_meeting,json")
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting scheduleMeeting;
    public UpdateGroupSettingsMultipartFormData1 withScheduleMeeting(UpdateGroupSettingsMultipartFormData1ScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=telephony,json")
    public UpdateGroupSettingsMultipartFormData1Telephony telephony;
    public UpdateGroupSettingsMultipartFormData1 withTelephony(UpdateGroupSettingsMultipartFormData1Telephony telephony) {
        this.telephony = telephony;
        return this;
    }
}
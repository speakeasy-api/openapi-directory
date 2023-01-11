package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettings {
    @SpeakeasyMetadata("multipartForm:name=email_notification,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification emailNotification;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withEmailNotification(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=feature,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature feature;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withFeature(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature feature) {
        this.feature = feature;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=in_meeting,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting inMeeting;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withInMeeting(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=integration,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration integration;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withIntegration(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration integration) {
        this.integration = integration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=profile,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile profile;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withProfile(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile profile) {
        this.profile = profile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recording,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording recording;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withRecording(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording recording) {
        this.recording = recording;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule_meeting,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting scheduleMeeting;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withScheduleMeeting(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=security,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity security;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withSecurity(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity security) {
        this.security = security;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=telephony,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony telephony;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withTelephony(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony telephony) {
        this.telephony = telephony;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tsp,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp tsp;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withTsp(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp tsp) {
        this.tsp = tsp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=zoom_rooms,json")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms zoomRooms;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettings withZoomRooms(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms zoomRooms) {
        this.zoomRooms = zoomRooms;
        return this;
    }
}
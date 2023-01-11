package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSettingsUpdateMultipartFormDataUserSettings {
    @SpeakeasyMetadata("multipartForm:name=email_notification,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings emailNotification;
    public UserSettingsUpdateMultipartFormDataUserSettings withEmailNotification(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=feature,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings feature;
    public UserSettingsUpdateMultipartFormDataUserSettings withFeature(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings feature) {
        this.feature = feature;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=in_meeting,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings inMeeting;
    public UserSettingsUpdateMultipartFormDataUserSettings withInMeeting(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=profile,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsProfile profile;
    public UserSettingsUpdateMultipartFormDataUserSettings withProfile(UserSettingsUpdateMultipartFormDataUserSettingsProfile profile) {
        this.profile = profile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recording,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings recording;
    public UserSettingsUpdateMultipartFormDataUserSettings withRecording(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings recording) {
        this.recording = recording;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule_meeting,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 scheduleMeeting;
    public UserSettingsUpdateMultipartFormDataUserSettings withScheduleMeeting(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=telephony,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings telephony;
    public UserSettingsUpdateMultipartFormDataUserSettings withTelephony(UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings telephony) {
        this.telephony = telephony;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tsp,json")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings tsp;
    public UserSettingsUpdateMultipartFormDataUserSettings withTsp(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings tsp) {
        this.tsp = tsp;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonUserSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings emailNotification;
    public UserSettingsUpdateApplicationJsonUserSettings withEmailNotification(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings feature;
    public UserSettingsUpdateApplicationJsonUserSettings withFeature(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings inMeeting;
    public UserSettingsUpdateApplicationJsonUserSettings withInMeeting(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public UserSettingsUpdateApplicationJsonUserSettingsProfile profile;
    public UserSettingsUpdateApplicationJsonUserSettings withProfile(UserSettingsUpdateApplicationJsonUserSettingsProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings recording;
    public UserSettingsUpdateApplicationJsonUserSettings withRecording(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 scheduleMeeting;
    public UserSettingsUpdateApplicationJsonUserSettings withScheduleMeeting(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings telephony;
    public UserSettingsUpdateApplicationJsonUserSettings withTelephony(UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings telephony) {
        this.telephony = telephony;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings tsp;
    public UserSettingsUpdateApplicationJsonUserSettings withTsp(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings tsp) {
        this.tsp = tsp;
        return this;
    }
}
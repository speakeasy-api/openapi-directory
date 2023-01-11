package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings emailNotification;
    public UserSettings200ApplicationJsonUserSettings withEmailNotification(UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings feature;
    public UserSettings200ApplicationJsonUserSettings withFeature(UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings inMeeting;
    public UserSettings200ApplicationJsonUserSettings withInMeeting(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public UserSettings200ApplicationJsonUserSettingsProfile profile;
    public UserSettings200ApplicationJsonUserSettings withProfile(UserSettings200ApplicationJsonUserSettingsProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings recording;
    public UserSettings200ApplicationJsonUserSettings withRecording(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 scheduleMeeting;
    public UserSettings200ApplicationJsonUserSettings withScheduleMeeting(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2 telephony;
    public UserSettings200ApplicationJsonUserSettings withTelephony(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2 telephony) {
        this.telephony = telephony;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings tsp;
    public UserSettings200ApplicationJsonUserSettings withTsp(UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings tsp) {
        this.tsp = tsp;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettings200ApplicationJsonAccountSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public AccountSettings200ApplicationJsonAccountSettingsEmailNotification emailNotification;
    public AccountSettings200ApplicationJsonAccountSettings withEmailNotification(AccountSettings200ApplicationJsonAccountSettingsEmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public AccountSettings200ApplicationJsonAccountSettingsFeature feature;
    public AccountSettings200ApplicationJsonAccountSettings withFeature(AccountSettings200ApplicationJsonAccountSettingsFeature feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting inMeeting;
    public AccountSettings200ApplicationJsonAccountSettings withInMeeting(AccountSettings200ApplicationJsonAccountSettingsInMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integration")
    public AccountSettings200ApplicationJsonAccountSettingsIntegration integration;
    public AccountSettings200ApplicationJsonAccountSettings withIntegration(AccountSettings200ApplicationJsonAccountSettingsIntegration integration) {
        this.integration = integration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public AccountSettings200ApplicationJsonAccountSettingsProfile profile;
    public AccountSettings200ApplicationJsonAccountSettings withProfile(AccountSettings200ApplicationJsonAccountSettingsProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public AccountSettings200ApplicationJsonAccountSettingsRecording recording;
    public AccountSettings200ApplicationJsonAccountSettings withRecording(AccountSettings200ApplicationJsonAccountSettingsRecording recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting scheduleMeeting;
    public AccountSettings200ApplicationJsonAccountSettings withScheduleMeeting(AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("security")
    public AccountSettings200ApplicationJsonAccountSettingsSecurity security;
    public AccountSettings200ApplicationJsonAccountSettings withSecurity(AccountSettings200ApplicationJsonAccountSettingsSecurity security) {
        this.security = security;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public AccountSettings200ApplicationJsonAccountSettingsTelephony telephony;
    public AccountSettings200ApplicationJsonAccountSettings withTelephony(AccountSettings200ApplicationJsonAccountSettingsTelephony telephony) {
        this.telephony = telephony;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp")
    public AccountSettings200ApplicationJsonAccountSettingsTsp tsp;
    public AccountSettings200ApplicationJsonAccountSettings withTsp(AccountSettings200ApplicationJsonAccountSettingsTsp tsp) {
        this.tsp = tsp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_rooms")
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms zoomRooms;
    public AccountSettings200ApplicationJsonAccountSettings withZoomRooms(AccountSettings200ApplicationJsonAccountSettingsZoomRooms zoomRooms) {
        this.zoomRooms = zoomRooms;
        return this;
    }
}
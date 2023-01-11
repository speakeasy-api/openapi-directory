package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateApplicationJsonUpdateAccountSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_notification")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification emailNotification;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withEmailNotification(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification emailNotification) {
        this.emailNotification = emailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature feature;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withFeature(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting inMeeting;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withInMeeting(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integration")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration integration;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withIntegration(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration integration) {
        this.integration = integration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile profile;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withProfile(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording recording;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withRecording(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_meeting")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting scheduleMeeting;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withScheduleMeeting(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting scheduleMeeting) {
        this.scheduleMeeting = scheduleMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("security")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity security;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withSecurity(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity security) {
        this.security = security;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony telephony;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withTelephony(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony telephony) {
        this.telephony = telephony;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp tsp;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withTsp(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp tsp) {
        this.tsp = tsp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_rooms")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms zoomRooms;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettings withZoomRooms(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms zoomRooms) {
        this.zoomRooms = zoomRooms;
        return this;
    }
}
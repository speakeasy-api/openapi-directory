package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_security")
    public Boolean autoSecurity;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withAutoSecurity(Boolean autoSecurity) {
        this.autoSecurity = autoSecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withEncryptionType(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_to_end_encrypted_meetings")
    public Boolean endToEndEncryptedMeetings;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withEndToEndEncryptedMeetings(Boolean endToEndEncryptedMeetings) {
        this.endToEndEncryptedMeetings = endToEndEncryptedMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password")
    public Boolean meetingPassword;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPassword(Boolean meetingPassword) {
        this.meetingPassword = meetingPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPasswordRequirement(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_password")
    public Boolean phonePassword;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withPhonePassword(Boolean phonePassword) {
        this.phonePassword = phonePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi_password")
    public Boolean pmiPassword;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withPmiPassword(Boolean pmiPassword) {
        this.pmiPassword = pmiPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meeting")
    public Boolean requirePasswordForScheduledMeeting;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledMeeting(Boolean requirePasswordForScheduledMeeting) {
        this.requirePasswordForScheduledMeeting = requirePasswordForScheduledMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_webinar")
    public Boolean requirePasswordForScheduledWebinar;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledWebinar(Boolean requirePasswordForScheduledWebinar) {
        this.requirePasswordForScheduledWebinar = requirePasswordForScheduledWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room_settings")
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoomSettings(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings) {
        this.waitingRoomSettings = waitingRoomSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_password")
    public Boolean webinarPassword;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withWebinarPassword(Boolean webinarPassword) {
        this.webinarPassword = webinarPassword;
        return this;
    }
}
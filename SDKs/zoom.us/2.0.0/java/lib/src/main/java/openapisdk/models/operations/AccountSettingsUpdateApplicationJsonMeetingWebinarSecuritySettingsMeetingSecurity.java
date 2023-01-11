package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_security")
    public Boolean autoSecurity;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withAutoSecurity(Boolean autoSecurity) {
        this.autoSecurity = autoSecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEncryptionType(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_to_end_encrypted_meetings")
    public Boolean endToEndEncryptedMeetings;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEndToEndEncryptedMeetings(Boolean endToEndEncryptedMeetings) {
        this.endToEndEncryptedMeetings = endToEndEncryptedMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password")
    public Boolean meetingPassword;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPassword(Boolean meetingPassword) {
        this.meetingPassword = meetingPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPasswordRequirement(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_password")
    public Boolean phonePassword;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withPhonePassword(Boolean phonePassword) {
        this.phonePassword = phonePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi_password")
    public Boolean pmiPassword;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withPmiPassword(Boolean pmiPassword) {
        this.pmiPassword = pmiPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meeting")
    public Boolean requirePasswordForScheduledMeeting;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledMeeting(Boolean requirePasswordForScheduledMeeting) {
        this.requirePasswordForScheduledMeeting = requirePasswordForScheduledMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_webinar")
    public Boolean requirePasswordForScheduledWebinar;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledWebinar(Boolean requirePasswordForScheduledWebinar) {
        this.requirePasswordForScheduledWebinar = requirePasswordForScheduledWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room_settings")
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoomSettings(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings) {
        this.waitingRoomSettings = waitingRoomSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_password")
    public Boolean webinarPassword;
    public AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWebinarPassword(Boolean webinarPassword) {
        this.webinarPassword = webinarPassword;
        return this;
    }
}
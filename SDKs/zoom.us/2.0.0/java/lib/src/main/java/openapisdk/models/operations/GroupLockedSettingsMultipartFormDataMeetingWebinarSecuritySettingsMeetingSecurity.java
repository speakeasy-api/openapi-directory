package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_security")
    public Boolean autoSecurity;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withAutoSecurity(Boolean autoSecurity) {
        this.autoSecurity = autoSecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withEncryptionType(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_to_end_encrypted_meetings")
    public Boolean endToEndEncryptedMeetings;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withEndToEndEncryptedMeetings(Boolean endToEndEncryptedMeetings) {
        this.endToEndEncryptedMeetings = endToEndEncryptedMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password")
    public Boolean meetingPassword;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPassword(Boolean meetingPassword) {
        this.meetingPassword = meetingPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPasswordRequirement(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_password")
    public Boolean phonePassword;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withPhonePassword(Boolean phonePassword) {
        this.phonePassword = phonePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi_password")
    public Boolean pmiPassword;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withPmiPassword(Boolean pmiPassword) {
        this.pmiPassword = pmiPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meeting")
    public Boolean requirePasswordForScheduledMeeting;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledMeeting(Boolean requirePasswordForScheduledMeeting) {
        this.requirePasswordForScheduledMeeting = requirePasswordForScheduledMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_webinar")
    public Boolean requirePasswordForScheduledWebinar;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledWebinar(Boolean requirePasswordForScheduledWebinar) {
        this.requirePasswordForScheduledWebinar = requirePasswordForScheduledWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room_settings")
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoomSettings(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings) {
        this.waitingRoomSettings = waitingRoomSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_password")
    public Boolean webinarPassword;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity withWebinarPassword(Boolean webinarPassword) {
        this.webinarPassword = webinarPassword;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_security")
    public Boolean autoSecurity;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withAutoSecurity(Boolean autoSecurity) {
        this.autoSecurity = autoSecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEncryptionType(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_to_end_encrypted_meetings")
    public Boolean endToEndEncryptedMeetings;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEndToEndEncryptedMeetings(Boolean endToEndEncryptedMeetings) {
        this.endToEndEncryptedMeetings = endToEndEncryptedMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password")
    public Boolean meetingPassword;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPassword(Boolean meetingPassword) {
        this.meetingPassword = meetingPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPasswordRequirement(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_password")
    public Boolean phonePassword;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withPhonePassword(Boolean phonePassword) {
        this.phonePassword = phonePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi_password")
    public Boolean pmiPassword;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withPmiPassword(Boolean pmiPassword) {
        this.pmiPassword = pmiPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meeting")
    public Boolean requirePasswordForScheduledMeeting;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledMeeting(Boolean requirePasswordForScheduledMeeting) {
        this.requirePasswordForScheduledMeeting = requirePasswordForScheduledMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_webinar")
    public Boolean requirePasswordForScheduledWebinar;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledWebinar(Boolean requirePasswordForScheduledWebinar) {
        this.requirePasswordForScheduledWebinar = requirePasswordForScheduledWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room_settings")
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoomSettings(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings) {
        this.waitingRoomSettings = waitingRoomSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_password")
    public Boolean webinarPassword;
    public UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWebinarPassword(Boolean webinarPassword) {
        this.webinarPassword = webinarPassword;
        return this;
    }
}
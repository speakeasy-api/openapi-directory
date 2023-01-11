package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_security")
    public Boolean autoSecurity;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withAutoSecurity(Boolean autoSecurity) {
        this.autoSecurity = autoSecurity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_type")
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEncryptionType(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_to_end_encrypted_meetings")
    public Boolean endToEndEncryptedMeetings;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withEndToEndEncryptedMeetings(Boolean endToEndEncryptedMeetings) {
        this.endToEndEncryptedMeetings = endToEndEncryptedMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password")
    public Boolean meetingPassword;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPassword(Boolean meetingPassword) {
        this.meetingPassword = meetingPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withMeetingPasswordRequirement(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_password")
    public Boolean phonePassword;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withPhonePassword(Boolean phonePassword) {
        this.phonePassword = phonePassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi_password")
    public Boolean pmiPassword;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withPmiPassword(Boolean pmiPassword) {
        this.pmiPassword = pmiPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meeting")
    public Boolean requirePasswordForScheduledMeeting;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledMeeting(Boolean requirePasswordForScheduledMeeting) {
        this.requirePasswordForScheduledMeeting = requirePasswordForScheduledMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_webinar")
    public Boolean requirePasswordForScheduledWebinar;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withRequirePasswordForScheduledWebinar(Boolean requirePasswordForScheduledWebinar) {
        this.requirePasswordForScheduledWebinar = requirePasswordForScheduledWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room_settings")
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWaitingRoomSettings(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings waitingRoomSettings) {
        this.waitingRoomSettings = waitingRoomSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_password")
    public Boolean webinarPassword;
    public GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity withWebinarPassword(Boolean webinarPassword) {
        this.webinarPassword = webinarPassword;
        return this;
    }
}
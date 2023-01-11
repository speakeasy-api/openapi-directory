package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum audioType;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withAudioType(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_password_for_scheduled_meetings")
    public String defaultPasswordForScheduledMeetings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withDefaultPasswordForScheduledMeetings(String defaultPasswordForScheduledMeetings) {
        this.defaultPasswordForScheduledMeetings = defaultPasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement meetingPasswordRequirement;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withMeetingPasswordRequirement(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants_video")
    public Boolean participantsVideo;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withParticipantsVideo(Boolean participantsVideo) {
        this.participantsVideo = participantsVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personal_meeting")
    public Boolean personalMeeting;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withPersonalMeeting(Boolean personalMeeting) {
        this.personalMeeting = personalMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi_password")
    public String pmiPassword;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withPmiPassword(String pmiPassword) {
        this.pmiPassword = pmiPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pstn_password_protected")
    public Boolean pstnPasswordProtected;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withPstnPasswordProtected(Boolean pstnPasswordProtected) {
        this.pstnPasswordProtected = pstnPasswordProtected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForPmiMeetings(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meetings")
    public Boolean requirePasswordForScheduledMeetings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForScheduledMeetings(Boolean requirePasswordForScheduledMeetings) {
        this.requirePasswordForScheduledMeetings = requirePasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_instant_meetings")
    public Boolean usePmiForInstantMeetings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withUsePmiForInstantMeetings(Boolean usePmiForInstantMeetings) {
        this.usePmiForInstantMeetings = usePmiForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_scheduled_meetings")
    public Boolean usePmiForScheduledMeetings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 withUsePmiForScheduledMeetings(Boolean usePmiForScheduledMeetings) {
        this.usePmiForScheduledMeetings = usePmiForScheduledMeetings;
        return this;
    }
}
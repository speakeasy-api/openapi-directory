package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum audioType;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withAudioType(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_password_for_scheduled_meetings")
    public String defaultPasswordForScheduledMeetings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withDefaultPasswordForScheduledMeetings(String defaultPasswordForScheduledMeetings) {
        this.defaultPasswordForScheduledMeetings = defaultPasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement meetingPasswordRequirement;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withMeetingPasswordRequirement(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants_video")
    public Boolean participantsVideo;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withParticipantsVideo(Boolean participantsVideo) {
        this.participantsVideo = participantsVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personal_meeting")
    public Boolean personalMeeting;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withPersonalMeeting(Boolean personalMeeting) {
        this.personalMeeting = personalMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi_password")
    public String pmiPassword;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withPmiPassword(String pmiPassword) {
        this.pmiPassword = pmiPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pstn_password_protected")
    public Boolean pstnPasswordProtected;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withPstnPasswordProtected(Boolean pstnPasswordProtected) {
        this.pstnPasswordProtected = pstnPasswordProtected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForPmiMeetings(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meetings")
    public Boolean requirePasswordForScheduledMeetings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForScheduledMeetings(Boolean requirePasswordForScheduledMeetings) {
        this.requirePasswordForScheduledMeetings = requirePasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_instant_meetings")
    public Boolean usePmiForInstantMeetings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withUsePmiForInstantMeetings(Boolean usePmiForInstantMeetings) {
        this.usePmiForInstantMeetings = usePmiForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_scheduled_meetings")
    public Boolean usePmiForScheduledMeetings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 withUsePmiForScheduledMeetings(Boolean usePmiForScheduledMeetings) {
        this.usePmiForScheduledMeetings = usePmiForScheduledMeetings;
        return this;
    }
}
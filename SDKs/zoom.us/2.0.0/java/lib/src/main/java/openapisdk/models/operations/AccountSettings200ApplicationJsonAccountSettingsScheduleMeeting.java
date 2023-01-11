package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting
 * Account Settings: Schedule Meeting.
**/
public class AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum audioType;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withAudioType(AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_with_domains")
    public Boolean enforceLoginWithDomains;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withEnforceLoginWithDomains(Boolean enforceLoginWithDomains) {
        this.enforceLoginWithDomains = enforceLoginWithDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement meetingPasswordRequirement;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withMeetingPasswordRequirement(AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not_store_meeting_topic")
    public Boolean notStoreMeetingTopic;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withNotStoreMeetingTopic(Boolean notStoreMeetingTopic) {
        this.notStoreMeetingTopic = notStoreMeetingTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personal_meeting")
    public Boolean personalMeeting;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withPersonalMeeting(Boolean personalMeeting) {
        this.personalMeeting = personalMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withRequirePasswordForPmiMeetings(AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meetings")
    public Boolean requirePasswordForScheduledMeetings;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withRequirePasswordForScheduledMeetings(Boolean requirePasswordForScheduledMeetings) {
        this.requirePasswordForScheduledMeetings = requirePasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_instant_meetings")
    public Boolean usePmiForInstantMeetings;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withUsePmiForInstantMeetings(Boolean usePmiForInstantMeetings) {
        this.usePmiForInstantMeetings = usePmiForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_scheduled_meetings")
    public Boolean usePmiForScheduledMeetings;
    public AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting withUsePmiForScheduledMeetings(Boolean usePmiForScheduledMeetings) {
        this.usePmiForScheduledMeetings = usePmiForScheduledMeetings;
        return this;
    }
}
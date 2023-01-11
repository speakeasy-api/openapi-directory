package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting
 * Account Settings: Schedule Meeting.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum audioType;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withAudioType(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_with_domains")
    public Boolean enforceLoginWithDomains;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withEnforceLoginWithDomains(Boolean enforceLoginWithDomains) {
        this.enforceLoginWithDomains = enforceLoginWithDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement meetingPasswordRequirement;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withMeetingPasswordRequirement(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not_store_meeting_topic")
    public Boolean notStoreMeetingTopic;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withNotStoreMeetingTopic(Boolean notStoreMeetingTopic) {
        this.notStoreMeetingTopic = notStoreMeetingTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personal_meeting")
    public Boolean personalMeeting;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withPersonalMeeting(Boolean personalMeeting) {
        this.personalMeeting = personalMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withRequirePasswordForPmiMeetings(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meetings")
    public Boolean requirePasswordForScheduledMeetings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withRequirePasswordForScheduledMeetings(Boolean requirePasswordForScheduledMeetings) {
        this.requirePasswordForScheduledMeetings = requirePasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_instant_meetings")
    public Boolean usePmiForInstantMeetings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withUsePmiForInstantMeetings(Boolean usePmiForInstantMeetings) {
        this.usePmiForInstantMeetings = usePmiForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_scheduled_meetings")
    public Boolean usePmiForScheduledMeetings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting withUsePmiForScheduledMeetings(Boolean usePmiForScheduledMeetings) {
        this.usePmiForScheduledMeetings = usePmiForScheduledMeetings;
        return this;
    }
}
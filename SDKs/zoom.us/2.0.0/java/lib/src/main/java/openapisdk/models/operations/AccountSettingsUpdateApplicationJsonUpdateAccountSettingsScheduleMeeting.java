package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting
 * Account Settings: Schedule Meeting.
**/
public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum audioType;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withAudioType(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login")
    public Boolean enforceLogin;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withEnforceLogin(Boolean enforceLogin) {
        this.enforceLogin = enforceLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_domains")
    public String enforceLoginDomains;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withEnforceLoginDomains(String enforceLoginDomains) {
        this.enforceLoginDomains = enforceLoginDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_login_with_domains")
    public Boolean enforceLoginWithDomains;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withEnforceLoginWithDomains(Boolean enforceLoginWithDomains) {
        this.enforceLoginWithDomains = enforceLoginWithDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_password_requirement")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement meetingPasswordRequirement;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withMeetingPasswordRequirement(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement meetingPasswordRequirement) {
        this.meetingPasswordRequirement = meetingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not_store_meeting_topic")
    public Boolean notStoreMeetingTopic;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withNotStoreMeetingTopic(Boolean notStoreMeetingTopic) {
        this.notStoreMeetingTopic = notStoreMeetingTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personal_meeting")
    public Boolean personalMeeting;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withPersonalMeeting(Boolean personalMeeting) {
        this.personalMeeting = personalMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withRequirePasswordForPmiMeetings(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meetings")
    public Boolean requirePasswordForScheduledMeetings;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withRequirePasswordForScheduledMeetings(Boolean requirePasswordForScheduledMeetings) {
        this.requirePasswordForScheduledMeetings = requirePasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_instant_meetings")
    public Boolean usePmiForInstantMeetings;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withUsePmiForInstantMeetings(Boolean usePmiForInstantMeetings) {
        this.usePmiForInstantMeetings = usePmiForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_pmi_for_scheduled_meetings")
    public Boolean usePmiForScheduledMeetings;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting withUsePmiForScheduledMeetings(Boolean usePmiForScheduledMeetings) {
        this.usePmiForScheduledMeetings = usePmiForScheduledMeetings;
        return this;
    }
}
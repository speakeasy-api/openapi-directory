package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupLockedSettingsMultipartFormData1ScheduleMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public Boolean audioType;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withAudioType(Boolean audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personal_meeting")
    public Boolean personalMeeting;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withPersonalMeeting(Boolean personalMeeting) {
        this.personalMeeting = personalMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pstn_password_protected")
    public Boolean pstnPasswordProtected;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withPstnPasswordProtected(Boolean pstnPasswordProtected) {
        this.pstnPasswordProtected = pstnPasswordProtected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public Boolean requirePasswordForPmiMeetings;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForPmiMeetings(Boolean requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upcoming_meeting_reminder")
    public Boolean upcomingMeetingReminder;
    public GroupLockedSettingsMultipartFormData1ScheduleMeeting withUpcomingMeetingReminder(Boolean upcomingMeetingReminder) {
        this.upcomingMeetingReminder = upcomingMeetingReminder;
        return this;
    }
}
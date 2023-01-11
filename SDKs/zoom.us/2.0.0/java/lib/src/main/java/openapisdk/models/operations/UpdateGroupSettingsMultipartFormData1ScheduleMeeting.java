package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsMultipartFormData1ScheduleMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public String audioType;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withAudioType(String audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pstn_password_protected")
    public Boolean pstnPasswordProtected;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withPstnPasswordProtected(Boolean pstnPasswordProtected) {
        this.pstnPasswordProtected = pstnPasswordProtected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_all_meetings")
    public Boolean requirePasswordForAllMeetings;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForAllMeetings(Boolean requirePasswordForAllMeetings) {
        this.requirePasswordForAllMeetings = requirePasswordForAllMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForPmiMeetings(UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduled_meetings")
    public Boolean requirePasswordForScheduledMeetings;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForScheduledMeetings(Boolean requirePasswordForScheduledMeetings) {
        this.requirePasswordForScheduledMeetings = requirePasswordForScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upcoming_meeting_reminder")
    public Boolean upcomingMeetingReminder;
    public UpdateGroupSettingsMultipartFormData1ScheduleMeeting withUpcomingMeetingReminder(Boolean upcomingMeetingReminder) {
        this.upcomingMeetingReminder = upcomingMeetingReminder;
        return this;
    }
}
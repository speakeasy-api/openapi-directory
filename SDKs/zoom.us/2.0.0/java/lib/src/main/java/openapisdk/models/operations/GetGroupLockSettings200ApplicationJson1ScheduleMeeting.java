package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupLockSettings200ApplicationJson1ScheduleMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_type")
    public Boolean audioType;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withAudioType(Boolean audioType) {
        this.audioType = audioType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed_password_in_join_link")
    public Boolean embedPasswordInJoinLink;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withEmbedPasswordInJoinLink(Boolean embedPasswordInJoinLink) {
        this.embedPasswordInJoinLink = embedPasswordInJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_pmi_jbh_password")
    public Boolean forcePmiJbhPassword;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withForcePmiJbhPassword(Boolean forcePmiJbhPassword) {
        this.forcePmiJbhPassword = forcePmiJbhPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_video")
    public Boolean hostVideo;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withHostVideo(Boolean hostVideo) {
        this.hostVideo = hostVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_before_host")
    public Boolean joinBeforeHost;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withJoinBeforeHost(Boolean joinBeforeHost) {
        this.joinBeforeHost = joinBeforeHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_authentication")
    public Boolean meetingAuthentication;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withMeetingAuthentication(Boolean meetingAuthentication) {
        this.meetingAuthentication = meetingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mute_upon_entry")
    public Boolean muteUponEntry;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withMuteUponEntry(Boolean muteUponEntry) {
        this.muteUponEntry = muteUponEntry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_video")
    public Boolean participantVideo;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withParticipantVideo(Boolean participantVideo) {
        this.participantVideo = participantVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pstn_password_protected")
    public Boolean pstnPasswordProtected;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withPstnPasswordProtected(Boolean pstnPasswordProtected) {
        this.pstnPasswordProtected = pstnPasswordProtected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_instant_meetings")
    public Boolean requirePasswordForInstantMeetings;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withRequirePasswordForInstantMeetings(Boolean requirePasswordForInstantMeetings) {
        this.requirePasswordForInstantMeetings = requirePasswordForInstantMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_pmi_meetings")
    public Boolean requirePasswordForPmiMeetings;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withRequirePasswordForPmiMeetings(Boolean requirePasswordForPmiMeetings) {
        this.requirePasswordForPmiMeetings = requirePasswordForPmiMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_password_for_scheduling_new_meetings")
    public Boolean requirePasswordForSchedulingNewMeetings;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withRequirePasswordForSchedulingNewMeetings(Boolean requirePasswordForSchedulingNewMeetings) {
        this.requirePasswordForSchedulingNewMeetings = requirePasswordForSchedulingNewMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upcoming_meeting_reminder")
    public Boolean upcomingMeetingReminder;
    public GetGroupLockSettings200ApplicationJson1ScheduleMeeting withUpcomingMeetingReminder(Boolean upcomingMeetingReminder) {
        this.upcomingMeetingReminder = upcomingMeetingReminder;
        return this;
    }
}
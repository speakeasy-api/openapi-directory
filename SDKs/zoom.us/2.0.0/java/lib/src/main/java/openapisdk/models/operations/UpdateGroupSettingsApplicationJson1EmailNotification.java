package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsApplicationJson1EmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_host_reminder")
    public Boolean alternativeHostReminder;
    public UpdateGroupSettingsApplicationJson1EmailNotification withAlternativeHostReminder(Boolean alternativeHostReminder) {
        this.alternativeHostReminder = alternativeHostReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_meeting_reminder")
    public Boolean cancelMeetingReminder;
    public UpdateGroupSettingsApplicationJson1EmailNotification withCancelMeetingReminder(Boolean cancelMeetingReminder) {
        this.cancelMeetingReminder = cancelMeetingReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_available_reminder")
    public Boolean cloudRecordingAvailableReminder;
    public UpdateGroupSettingsApplicationJson1EmailNotification withCloudRecordingAvailableReminder(Boolean cloudRecordingAvailableReminder) {
        this.cloudRecordingAvailableReminder = cloudRecordingAvailableReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_reminder")
    public Boolean jbhReminder;
    public UpdateGroupSettingsApplicationJson1EmailNotification withJbhReminder(Boolean jbhReminder) {
        this.jbhReminder = jbhReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for_host_reminder")
    public Boolean scheduleForHostReminder;
    public UpdateGroupSettingsApplicationJson1EmailNotification withScheduleForHostReminder(Boolean scheduleForHostReminder) {
        this.scheduleForHostReminder = scheduleForHostReminder;
        return this;
    }
}
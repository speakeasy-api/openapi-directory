package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification
 * Account Settings: Notification.
**/
public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_host_reminder")
    public Boolean alternativeHostReminder;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification withAlternativeHostReminder(Boolean alternativeHostReminder) {
        this.alternativeHostReminder = alternativeHostReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_meeting_reminder")
    public Boolean cancelMeetingReminder;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification withCancelMeetingReminder(Boolean cancelMeetingReminder) {
        this.cancelMeetingReminder = cancelMeetingReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_avaliable_reminder")
    public Boolean cloudRecordingAvaliableReminder;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification withCloudRecordingAvaliableReminder(Boolean cloudRecordingAvaliableReminder) {
        this.cloudRecordingAvaliableReminder = cloudRecordingAvaliableReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_reminder")
    public Boolean jbhReminder;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification withJbhReminder(Boolean jbhReminder) {
        this.jbhReminder = jbhReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low_host_count_reminder")
    public Boolean lowHostCountReminder;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification withLowHostCountReminder(Boolean lowHostCountReminder) {
        this.lowHostCountReminder = lowHostCountReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for_reminder")
    public Boolean scheduleForReminder;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification withScheduleForReminder(Boolean scheduleForReminder) {
        this.scheduleForReminder = scheduleForReminder;
        return this;
    }
}
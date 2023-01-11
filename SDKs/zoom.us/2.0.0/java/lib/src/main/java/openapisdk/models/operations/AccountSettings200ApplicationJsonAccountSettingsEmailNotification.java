package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsEmailNotification
 * Account Settings: Notification.
**/
public class AccountSettings200ApplicationJsonAccountSettingsEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_host_reminder")
    public Boolean alternativeHostReminder;
    public AccountSettings200ApplicationJsonAccountSettingsEmailNotification withAlternativeHostReminder(Boolean alternativeHostReminder) {
        this.alternativeHostReminder = alternativeHostReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_meeting_reminder")
    public Boolean cancelMeetingReminder;
    public AccountSettings200ApplicationJsonAccountSettingsEmailNotification withCancelMeetingReminder(Boolean cancelMeetingReminder) {
        this.cancelMeetingReminder = cancelMeetingReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_avaliable_reminder")
    public Boolean cloudRecordingAvaliableReminder;
    public AccountSettings200ApplicationJsonAccountSettingsEmailNotification withCloudRecordingAvaliableReminder(Boolean cloudRecordingAvaliableReminder) {
        this.cloudRecordingAvaliableReminder = cloudRecordingAvaliableReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_reminder")
    public Boolean jbhReminder;
    public AccountSettings200ApplicationJsonAccountSettingsEmailNotification withJbhReminder(Boolean jbhReminder) {
        this.jbhReminder = jbhReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low_host_count_reminder")
    public Boolean lowHostCountReminder;
    public AccountSettings200ApplicationJsonAccountSettingsEmailNotification withLowHostCountReminder(Boolean lowHostCountReminder) {
        this.lowHostCountReminder = lowHostCountReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for_reminder")
    public Boolean scheduleForReminder;
    public AccountSettings200ApplicationJsonAccountSettingsEmailNotification withScheduleForReminder(Boolean scheduleForReminder) {
        this.scheduleForReminder = scheduleForReminder;
        return this;
    }
}
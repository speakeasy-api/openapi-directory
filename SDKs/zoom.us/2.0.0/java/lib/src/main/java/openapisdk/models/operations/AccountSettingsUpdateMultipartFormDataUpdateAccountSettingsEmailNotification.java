package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification
 * Account Settings: Notification.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_host_reminder")
    public Boolean alternativeHostReminder;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification withAlternativeHostReminder(Boolean alternativeHostReminder) {
        this.alternativeHostReminder = alternativeHostReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_meeting_reminder")
    public Boolean cancelMeetingReminder;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification withCancelMeetingReminder(Boolean cancelMeetingReminder) {
        this.cancelMeetingReminder = cancelMeetingReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_avaliable_reminder")
    public Boolean cloudRecordingAvaliableReminder;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification withCloudRecordingAvaliableReminder(Boolean cloudRecordingAvaliableReminder) {
        this.cloudRecordingAvaliableReminder = cloudRecordingAvaliableReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_reminder")
    public Boolean jbhReminder;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification withJbhReminder(Boolean jbhReminder) {
        this.jbhReminder = jbhReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low_host_count_reminder")
    public Boolean lowHostCountReminder;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification withLowHostCountReminder(Boolean lowHostCountReminder) {
        this.lowHostCountReminder = lowHostCountReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for_reminder")
    public Boolean scheduleForReminder;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification withScheduleForReminder(Boolean scheduleForReminder) {
        this.scheduleForReminder = scheduleForReminder;
        return this;
    }
}
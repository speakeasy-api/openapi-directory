package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_host_reminder")
    public Boolean alternativeHostReminder;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings withAlternativeHostReminder(Boolean alternativeHostReminder) {
        this.alternativeHostReminder = alternativeHostReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_meeting_reminder")
    public Boolean cancelMeetingReminder;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings withCancelMeetingReminder(Boolean cancelMeetingReminder) {
        this.cancelMeetingReminder = cancelMeetingReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_reminder")
    public Boolean jbhReminder;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings withJbhReminder(Boolean jbhReminder) {
        this.jbhReminder = jbhReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for_reminder")
    public Boolean scheduleForReminder;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings withScheduleForReminder(Boolean scheduleForReminder) {
        this.scheduleForReminder = scheduleForReminder;
        return this;
    }
}
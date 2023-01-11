package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_host_reminder")
    public Boolean alternativeHostReminder;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings withAlternativeHostReminder(Boolean alternativeHostReminder) {
        this.alternativeHostReminder = alternativeHostReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_meeting_reminder")
    public Boolean cancelMeetingReminder;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings withCancelMeetingReminder(Boolean cancelMeetingReminder) {
        this.cancelMeetingReminder = cancelMeetingReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jbh_reminder")
    public Boolean jbhReminder;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings withJbhReminder(Boolean jbhReminder) {
        this.jbhReminder = jbhReminder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for_reminder")
    public Boolean scheduleForReminder;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings withScheduleForReminder(Boolean scheduleForReminder) {
        this.scheduleForReminder = scheduleForReminder;
        return this;
    }
}